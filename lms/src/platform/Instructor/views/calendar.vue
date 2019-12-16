<template>
  <div class="home">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper d-flex justify-lg-space-between">
        <div class="snackbar">
          <snackbar />
        </div>

        <div class="newEvent">
          <h3 class="schedule">Schedule New Event</h3>
          <!-- set start date -->
          <form @submit.prevent="handleSubmit">
            <v-text-field v-model="event.name" label="Event Title"></v-text-field>
            <textarea v-model="event.details"  cols="30" rows="5" class="grey lighten-4 pa-2" placeholder="Details"/>
            <v-menu 
            offset-y 
            ref="menu" 
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale"
            min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="event.start"
                  label="start date"
                  v-on="on"></v-text-field>
              </template>

              <v-date-picker v-model="event.start" @input="menu = false" scrollable></v-date-picker>
            </v-menu>

            <!-- set end date -->
            <v-menu 
            offset-y 
            ref="menu" 
            v-model="menu1"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale"
            min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="event.end"
                  label="end date"
                  v-on="on"></v-text-field>
              </template>

              <v-date-picker v-model="event.end" scrollable @input="menu1 = false"></v-date-picker>
            </v-menu>

            <v-select
              :items="colorOptions"
              v-model="event.color"
              label="Color"
            ></v-select>

            <v-btn depressed color="orange lighten-3" type="submit">Save</v-btn>
          </form>
        </div>
    

        <div class="main_content">
            <div class="divider">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <!-- the header of the calendar -->
          <v-sheet height="64">
            <v-toolbar flat color="white">
              <v-btn fab text small @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn outlined class="mr-4" @click="setToday">
                Today
              </v-btn>
              <v-btn fab text small @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title>{{ title }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    outlined
                    v-on="on"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>

          <!-- calendar component -->
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              class="calendar"
              :event-color="getEventColor"
              :event-margin-bottom="6"
              :now="today"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              full-width
              offset-x
            >
              <v-card
                color="grey lighten-4"
                min-width="350px"
                flat
              >
                <v-toolbar
                  :color="selectedEvent.color"
                  dark
                >
                  <v-btn icon @click="edit = true">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title v-if="!edit" v-html="selectedEvent.name"></v-toolbar-title>
                  <span>
                    <input v-if="edit" v-model="selectedEvent.name" @keyup.enter="edit = false" class="blue darken-3 edit" type="text">
                  </span>
                </v-toolbar>
                <v-card-text>
                  <span v-if="!edit" v-html="selectedEvent.details"></span>
                  <span>
                    <input v-if="edit" v-model="selectedEvent.details" @keyup.enter="edit = false" class="grey lighten-3 edit" type="text">
                  </span>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    text
                    color="secondary"
                    @click="selectedOpen = false"
                    :disabled="edit"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                  v-if="edit"
                    text
                    color="secondary"
                    @click="edit = false"
                    
                  >
                    Ok
                  </v-btn>


                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../components/dheader'
import snackbar from '../components/snackbar'

  export default {
    components: {
        dheader,
        snackbar,
    },

    data: () => ({
      edit: false,
      event: {
        name: '',
        details: '',
        start: '',
        end: '',
        color: 'primary'
      },

      //event colors to choose from
      colorOptions: [
        { text: 'Primary', value: 'primary' },
        { text: 'Secondary', value: 'secondary' },
        { text: 'Accent', value: 'accent' },
        { text: 'Red', value: 'red' },
        { text: 'Pink', value: 'pink' },
        { text: 'Purple', value: 'purple' },
        { text: 'Deep Purple', value: 'deep-purple' },
        { text: 'Indigo', value: 'indigo' },
        { text: 'Blue', value: 'blue' },
        { text: 'Light Blue', value: 'light-blue' },
        { text: 'Cyan', value: 'cyan' },
        { text: 'Teal', value: 'teal' },
        { text: 'Green', value: 'green' },
        { text: 'Light Green', value: 'light-green' },
        { text: 'Lime', value: 'lime' },
        { text: 'Yellow', value: 'yellow' },
        { text: 'Amber', value: 'amber' },
        { text: 'Orange', value: 'orange' },
      ],
      menu: false,
      menu1: false,
      items: [
          {
              text: 'Dashboard',
              disabled: false,
              href: '/instructor',
          },
          {
              text: 'Home',
              disabled: true,
              href: '#',
          }
      ],

      divider: '>',
      large: false,
      customDiv: false,

      //calendar data
      today: new Date().getDate,
      focus: new Date().getDate,
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: []
    }),

    computed: {
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
    },
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      handleSubmit() {
        //push the data in the events array
        //clone the array object using the spread operator 
        this.events.push({...this.event})
      },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.events.start = start
        this.events.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
    }
  }
</script>

<style scoped>
.snackbar {
    height: 100vh;
}

.sidebar {
    padding: 100px 0;
    font-size: 25px;    
}

.main_content {
    padding: 30px;
    width: 65%;
    margin: 30px;
}

.newEvent {
  width: 300px;
  margin-top: 10%;
}

.schedule {
  color: #0d98ba;
}

.edit {
  width: 400px;
  height: 40px;
  font-size: 25px;
  padding: 5px;
  border-radius: 5px;
}
</style>