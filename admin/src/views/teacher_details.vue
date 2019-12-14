<template>
    <div class="teacher_details">
        <dheader></dheader>

        <v-container>
            <!-- card for the profile picture and student number display -->
            <h4 class="pl-5">Manage Student Information</h4>
            <v-card class="mt-6 pl-10" max-width="600" flat>
                <v-list-item three-line>
                    <v-list-item-avatar size="120" color="grey" class="mt-5">
                        <v-img src="/teacher.jpeg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">Lorem Ipsumdolor</v-list-item-title>
                        <v-list-item-subtitle color="grey lighten-3"><i>student_number</i></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-card-actions class="ml-12">
                    <v-btn class="btn" text color="green darken-3"><i>active_account</i></v-btn>
                </v-card-actions>
            </v-card>

            <!-- personal information in grid view -->
            <v-container v-for="detail in details" :key="detail.firstname">
                <div class="divider d-flex justify-lg-space-between">
                    <h3>Personal Information</h3>
                    <v-btn depressed class="orange--text mb-1 edit" @click="dialog = true">Edit
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </div>

                <!-- dialog to edit personal information -->
                <v-dialog v-model="dialog" max-width="800">
                    <div class="white modal pa-3">
                        <div class="close d-flex justify-lg-space-between">
                            <h2 class="grey--text">Personal Information</h2>
                            <v-btn class="icon" icon @click.stop="dialog = false">
                                <v-icon size="40">mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <v-divider></v-divider>
                        <div class="personalForm d-flex justify-center">
                            <form>
                            <v-text-field
                            v-model="name"
                            type="text"
                            label="First Name"
                            required
                            ></v-text-field>

                            <v-text-field
                            v-model="email"
                            type="text"
                            label="Last Name"
                            required
                            ></v-text-field>

                            <v-menu
                                ref="startMenu"
                                v-model="startMenu"
                                :nudge-right="30"
                                :close-on-content-click="false"
                                :return-value.sync="start"
                                transition="scale-transition"
                                min-width="290px"
                                offset-y
                                full-width>
                                <template v-slot:activator="{ on }">
                                    <v-text-field v-model="start" label="Date of Birth" readonly v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="start" scrollable>
                                    <v-btn @click="startMenu = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn @click="$refs.startMenu.save(start)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu> 
                            <v-select
                            v-model="select"
                            :items="gender"
                            label="Gender"
                            required
                            ></v-select>

                            <!-- skip to the next dialog -->
                            <div class="orange lighten-4 want pa-4">
                                <h3>Do you want to Add or Edit Contact Information?</h3>
                                <v-btn outlined class="ma-4" color="blue" @click="dialog1 = true">Yes</v-btn>
                            </div>

                            <v-btn dark depressed color="blue" class="mr-4 mt-10 submitted" @click="dialog3 = true">submit</v-btn>
                        </form>
                        </div>
                    </div>
                </v-dialog>

                <!-- successful submission -->
                <v-dialog v-model="dialog3" max-width="800">
                    <div class="white modal pa-3">
                        <div class="close d-flex justify-end">
                            <v-btn class="icon" icon @click.stop="dialog3 = false">
                                <v-icon size="40">mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <v-divider></v-divider>
                        <v-icon color="orange" size="90">mdi-cloud-check</v-icon>
                        <h3>You have successfully enrolled</h3>
                        <p>You can click here to go back</p>
                        
                        <div class="buttons d-flex justify-center align-center">
                            <v-btn dark depressed type="submit" value="submit" class="blue ma-10" @click.stop="dialog3 = false">Go Back</v-btn>
                        </div>
                    </div>
                </v-dialog>

                <v-row class="card-row">
                    <v-col>
                        <v-row class="pl-5">                        
                            <v-card flat class="card ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Firstname</v-list-item-subtitle>
                                        <v-list-item-title class=" mb-1">{{ detail.firstname }}</v-list-item-title>
                                    </v-list-item-content>

                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Lastname</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ detail.lastname }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>                        
                        </v-row>

                        <v-row class="pl-5">
                            <v-card flat class="card ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Date of Birth</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ detail.DOB }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>

                        <v-row class="pl-5">
                            <v-card flat class="card ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Sex</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ detail.sex }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>

            <!-- contact information -->
            <v-container v-for="detail in details" :key="detail.firstname">
                <div class="divider d-flex justify-lg-space-between">
                    <h3>Contact Information</h3>
                    <v-btn depressed class="orange--text mb-1 edit" @click="dialog1 = true">Edit
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </div>

                <!-- dialog to edit contact information -->
                <v-dialog v-model="dialog1" max-width="800">
                    <div class="white modal pa-3">
                        <div class="close d-flex justify-lg-space-between">
                            <h2 class="grey--text">Contact Information</h2>
                            <v-btn class="icon" icon @click.stop="dialog1 = false">
                                <v-icon size="40">mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <v-divider></v-divider>
                        <div class="personalForm d-flex justify-center">
                            <form>
                            
                            <v-text-field
                            v-model="email"
                            type="email"
                            label="Email"
                            required
                            ></v-text-field>

                            <v-text-field
                            v-model="phone"
                            type="number"
                            label="Phone Number"
                            required
                            ></v-text-field>

                            <v-text-field
                            v-model="postal"
                            type="text"
                            label="Postal Address"
                            required
                            ></v-text-field>

                            <v-text-field
                            v-model="emergencyName"
                            type="text"
                            label="Name of Emergency Contact"
                            required
                            ></v-text-field>

                            <v-text-field
                            v-model="emergencyNumber"
                            type="number"
                            label="Number of Emergency Contact"
                            required
                            ></v-text-field>

                            <v-text-field
                            v-model="relationship"
                            type="text"
                            label="Relationship to Student"
                            required
                            ></v-text-field>

                            <!-- skip to the next dialog -->
                            <div class="orange lighten-4 want pa-4">
                                <h3>Do you want to Add or Edit Academic Information?</h3>
                                <v-btn outlined class="ma-4" color="blue" @click="dialog2 = true">Yes</v-btn>
                            </div>

                            <v-btn dark depressed color="blue" class="mr-4 mt-10 submitted" @click="dialog3 = true">submit</v-btn>
                        </form>
                        </div>
                    </div>
                </v-dialog>

                <v-row class="card-row">
                    <v-col>
                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Email</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ detail.email }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>

                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Phone Number</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ detail.phone }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>

                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Postal Address</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ detail.postal }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>
                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Physical Address</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ detail.physical }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>

            <!-- emergency contact info -->
             <v-container v-for="item in emergency" :key="item.name">
                <div class="divider d-flex justify-lg-space-between">
                    <h3>Emergency Contact Information</h3>
                    <!-- share the edit dialog -->
                    <v-btn depressed class="orange--text mb-1 edit" @click="dialog1 = true">Edit
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </div>

                <v-row class="card-row">
                    <v-col>
                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Name of Emergency Contact Person</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ item.name }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>

                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Phone Number of Emergency Contact</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ item.tel }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>

                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Relationship to student</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ item.rlshp }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>

            <!-- academic information about the student -->
            <v-container v-for="item in academic" :key="item">
                <div class="divider d-flex justify-lg-space-between">
                    <h3>Academic Information</h3>
                    <v-btn depressed class="orange--text mb-1 edit" @click="dialog2 = true">Edit
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </div>

                <!-- dialog to edit academic information -->
                <v-dialog v-model="dialog2" max-width="800">
                    <div class="white modal pa-3">
                        <div class="close d-flex justify-lg-space-between">
                            <h2 class="grey--text">Academic Information</h2>
                            <v-btn class="icon" icon @click.stop="dialog2 = false">
                                <v-icon size="40">mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <v-divider></v-divider>
                        <div class="personalForm d-flex justify-center">
                            
                            <div class="academicForm">
                                <p class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tenetur libero esse voluptatibus aut</p>
                                <form>
                                    <v-text-field
                                    v-model="email"
                                    type="text"
                                    label="Staff Number"
                                    required
                                    ></v-text-field>

                                    <v-select
                                    v-model="departmentSelect"
                                    :items="department"
                                    placeholder="Select One (i.e Department)"
                                    required
                                    ></v-select>

                                    <v-btn dark depressed color="blue" class="mr-4 mt-10 submitted" @click="dialog3 = true">submit</v-btn>
                                </form> 
                            </div>
                        </div>
                    </div>
                </v-dialog>

                <v-row class="card-row">
                    <v-col>
                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Staff Number</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ item.staffNo }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>

                        <v-row class="pl-5">
                            <v-card flat class="ma-1"> 
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-subtitle class="orange--text">Department</v-list-item-subtitle>
                                        <v-list-item-title class="mb-1">{{ item.dept }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>

            <v-btn color="orange" dark class="next display-1" to="/teacher_details2">next
                <v-icon size="40">mdi-arrow-right</v-icon>
            </v-btn>
            
            
        </v-container>
    </div>
</template>

<script>
import dheader from '../components/dheader.vue'
export default {
    components: {
        dheader
    },

    data: () => ({
        dialog1: false,
        dialog: false,
        dialog2:false,
        dialog3: false,
        details: [
            {
                firstname: 'Lorem',
                lastname: 'Ipsum',
                DOB: '00/00/0000',
                sex: 'MALE',
                email: 'loremipsum@domain.com',
                phone: '+254727836490',
                postal: 'P.O. Box 20199, Nairobi, Kenya',
                physical: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
            }
        ],
         emergency: [
            {
                name: 'Jane Doe',
                tel: '0712413243',
                rlshp: 'Mother'
            }
        ],
        academic: [
            {
                staffNo: '001ST',
                dept: 'Lorem ipsum dolor, sit amet consectetur adipisicing'
            }
        ],
        
        departmentSelect: '',
        department: ['Languages', 'Law', 'Journalism', 'Diplomacy & Interstudy'],
    }),
}
</script>

<style scoped>
.divider {
    border-bottom: 1px solid lightgray;
    width: 65%;
    margin: 6px 0px;
}

.divider div,
.divider h3,
.span {
    display: inline-block;
}

.span {
    margin-left: 65%;
}

.ml-12 {
    margin-left: 130px !important;
}

.btn {
    text-transform: lowercase;
}

.btn_1,
.edit {
    text-transform: capitalize;
}

.next {
    display: absolute;
    left: 60%;
    height: 80px !important;
    width: 12.5rem !important;
    border-radius: 10px !important;
}

.modal {
    min-height: 700px;
    text-align: center;
}

.personalForm {
    width: 100%;
}

.submitted {
    position: relative;
    left: 40%;
}

.want {
    border-radius: 3px;
}

.academicForm {
    padding: 10px;
    width: 400px;
}
</style>