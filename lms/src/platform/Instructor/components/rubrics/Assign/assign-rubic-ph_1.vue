<template>
  <v-flex xs10 class="mt-10">
                   <p class="font-weight-bold headline">Rubrics for marking</p>
                    <v-container>
                       <!--  Rubric one -->
                        <v-layout row> 
                            <div class="subtitle font-weight-bold mb-7"> Content & Development</div>
                            <v-layout row wrap ml-2>
                            <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Poor (0 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Content is incomplete.</li>
                                        <li> Points are not clear and /or persuasive.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Fair (1 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Content is not comprehensive and /or persuasive.</li>
                                        <li> Major points are addressed, but not well supported.</li>
                                        <li> Research is inadequate or does not address course concepts.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Good (2 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Content is comprehensive, accurate, and persuasive.</li>
                                        <li> Major points are stated clearly and are well supported.</li>
                                        <li> Research is adequate, timely and addresses course concepts.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Excellent (3 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Content is thorough, accurate, persuasive and relates to a specific purpose</li>
                                        <li> Major points are specific, stated clearly, and are well-supported.</li>
                                        <li> Research is primary</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                            </v-layout>
                        </v-layout>
                        <!-- --- -->

                        <!--  Rubric two -->
                        <v-layout row mt-9> 
                            <div class="subtitle font-weight-bold mb-7"> Organization & Structure</div>
                            <v-layout row wrap ml-2>
                            <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Poor (0 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Organization and structure detract from the concepts of the paper.</li>
                                        <li> Concepts are disjointed and lack transition of thoughts.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Fair (1 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Structure of the paragraph is not easy to follow.</li>
                                        <li> Paragraph transitions need improvement.</li>
                                        <li> Concepts are disconnected. </li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Good (2 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Concepts of the paragraphs are clear and easy to follow.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Excellent (3 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Concepts of paragraphs are filled with details of support for thesis and topic sentences.</li>
                                        <li> Paragraphs flow into each other with connective concepts.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                            </v-layout>
                        </v-layout>
                        <!-- --- -->

                         <!--  Rubric three -->
                        <v-layout row mt-9> 
                            <div class="subtitle font-weight-bold mb-7"> Grammar, Punctuation & Spelling</div>
                            <v-layout row wrap ml-2>
                            <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Poor (0 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Paper contains numerous grammatical, punctuation, and spelling errors. </li>
                                        <li> Language uses jargon or conversational tone </li>
                                        <li> Language is not professional </li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Fair (1 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Paper contains few grammatical, punctuation and spelling errors.</li>
                                        <li> Language lacks clarity or includes the use of some jargon or conversational tone; lacks professionalism</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Good (2 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Rules of grammar, usage, and punctuation are followed; spelling is correct</li>
                                        <li> Language is clear; sentences display consistently varied structure.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Excellent (3 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Correct grammatical construction</li>
                                        <li> Free of typos</li>
                                        <li> Compound/complex sentences</li>
                                        <li> Correct puncutation</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                            </v-layout>
                        </v-layout>
                        <!-- --- -->

                    </v-container>
              </v-flex>
</template>
