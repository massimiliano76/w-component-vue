<template>
    <div>


        <div class="head1">w-dynamic-list</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dynamic-list
                    class="list"
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data1"
                >
                    <template v-slot:block="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;">

                            <div style="color:#f26;">{{props.irow+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'viewHeightMax'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dynamic-list
                    class="list"
                    style="border:1px solid #ddd;"
                    :viewHeightMax="250"
                    :rows="WDynamicList.data1"
                >
                    <template v-slot:block="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;">

                            <div style="color:#f26;">{{props.irow+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999; word-break:normal;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'filterKeywords & searchEmpty'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <span style="padding-right:10px;">Search :</span>
                    <input
                        style="padding:2px 15px; color:#666; border:1px solid #fca; border-radius:30px; outline:none;"
                        v-model="WDynamicList.keywords"
                    />
                </div>

                <w-dynamic-list
                    class="list"
                    style="border:1px solid #ddd;"
                    :filterKeywords="WDynamicList.keywords"
                    :searchEmpty="'There are no items to show...'"
                    :rows="WDynamicList.data1"
                >
                    <template v-slot:block="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;">

                            <div style="color:#f26;">{{props.irow+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999; word-break:normal;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'slot item with image'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dynamic-list
                    class="list"
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data2"
                >
                    <template v-slot:block="props">

                        <div style="padding:15px;">

                            <div style="display:table-cell; vertical-align:top; padding:5px 20px 0px 0px;">
                                <img style="border-radius:50%; width:48px; height:48px;" :src="props.row.avatar" alt="avatar" />
                            </div>

                            <div style="display:table-cell; vertical-align:top;">

                                <div style="margin-bottom:5px;">
                                    <div style="display:inline-block; vertical-align:middle; padding:1px 9px; color:#fff; background-color:#f26; border-radius:10px; font-size:0.6rem;">{{props.irow+1}}</div>
                                    <div style="display:inline-block; vertical-align:middle; font-size:1.1rem; margin-left:7px;">{{props.row.name}}</div>
                                </div>

                                <div style="font-size:0.8rem; color:#999;">{{props.row.msg}}</div>

                            </div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'large data (1,000,000 items)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data3"
                >
                    <template v-slot:block="props">

                        <div style="padding:15px;">

                            <div style="display:table-cell; vertical-align:top; padding:5px 20px 0px 0px;">
                                <img style="border-radius:50%; width:48px; height:48px;" :src="props.row.avatar" alt="avatar" />
                            </div>

                            <div style="display:table-cell; vertical-align:top;">

                                <div style="margin-bottom:5px;">
                                    <div style="display:inline-block; vertical-align:middle; padding:1px 9px; color:#fff; background-color:#f26; border-radius:10px; font-size:0.6rem;">{{props.irow+1}}</div>
                                    <div style="display:inline-block; vertical-align:middle; font-size:1.1rem; margin-left:7px;">{{props.row.name}}</div>
                                </div>

                                <div style="font-size:0.8rem; color:#999;">{{props.row.msg}}</div>

                            </div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WDynamicList from './components/WDynamicList.vue'

// let data = (function(n) {
//     n /= 5
//     let tt = [
//         {
//             name: 'Jason Oner',
//             msg: 'Boost campaign performance by targeting specific user groups.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
//         },
//         {
//             name: 'Travis Howard',
//             msg: 'Determine the exact users you\'d like to target with a message or an experiment, based on behavioral data, like watching a video, or abandoning a cart, and demographic data, like age or location.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
//         },
//         {
//             name: 'Ali Connors',
//             msg: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
//         },
//         {
//             name: 'Cindy Baker',
//             msg: 'Easily build highly personalized messages, and test multiple versions to see what works—all in Mixpanel, no code required.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
//         },
//         {
//             name: 'Deborah Lee',
//             msg: 'Set detailed behavioral triggers, sequences, and rate limits for messages, to ensure that each campaign is relevant, timely, and delivered at the right pace.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
//         },
//     ]
//     let r = []
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < tt.length; j++) {
//             r.push(tt[j])
//         }
//     }
//     return r
// })(100)
// console.log(JSON.stringify(data))

export default {
    components: {
        demolink,
        WDynamicList,
    },
    props: {
    },
    data: function() {
        return {
            'WDynamicList': {
                'keywords': 'fede 80',
                'data1': [
                    'Examine trends in the movement of guns across different states.',
                    'Code of Federal Regulations - Alcohol, Tobacco Products and Firearms',
                    '1980-2014 November General Election Turnout and Registration',
                    'Reported Voting and Registration, by Sex and Single Years of Age: November 2016',
                    'felon-disenfranchisement',
                    '623e708e-574e-45a2-9dc9-b53178903325',
                    'https://assembly-public-spotlight.s3.amazonaws.com/assets/images/public-welcome/card_disenfranchisement.jpg',
                    'Map felon disenfranchisement patterns by state.',
                    'Estimate how felon enfranchisement could affect close elections. Track how disenfranchisement has varied over time. an American non-profit journalism outlet dedicated to expanding media coverage on the state of guns in the U.S., spent 11 months amassing data on stolen and recovered guns. They filed hundreds of public record requests to over 1,000 law enforcement agencies in 36 states to investigate what happens to guns when they are reported stolen. The data reveals that guns were recovered by a variety of means, from being turned in as evidence or by abandonment.',
                    'Vivien Ngo, Data Journalism Fellow.',
                ],
                'data2': (function(a) {
                    a /= 5; let b = [{ name: 'Jason Oner', msg: 'Boost campaign performance by targeting specific user groups.', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' }, { name: 'Travis Howard', msg: 'Determine the exact users you\'d like to target with a message or an experiment, based on behavioral data, like watching a video, or abandoning a cart, and demographic data, like age or location.', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' }, { name: 'Ali Connors', msg: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar. Examine trends in the movement of guns across different states. Code of Federal Regulations - Alcohol, Tobacco Products and Firearms 1980-2014 November General Election Turnout and Registration. Reported Voting and Registration, by Sex and Single Years of Age: November 2016. Map felon disenfranchisement patterns by state.', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' }, { name: 'Cindy Baker', msg: 'Easily build highly personalized messages, and test multiple versions to see what works\u2014all in Mixpanel, no code required.', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }, { name: 'Deborah Lee', msg: 'Set detailed behavioral triggers, sequences, and rate limits for messages, to ensure that each campaign is relevant, timely, and delivered at the right pace.', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }]; let c = []; for (let d = 0; d < a; d++) for (let a = 0; a < b.length; a++)c.push(b[a]); return c
                })(100),
                'data3': (function(a) {
                    a /= 5; let b = [{ name: 'Jason Oner', msg: 'Boost campaign performance by targeting specific user groups.', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' }, { name: 'Travis Howard', msg: 'Determine the exact users you\'d like to target with a message or an experiment, based on behavioral data, like watching a video, or abandoning a cart, and demographic data, like age or location.', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' }, { name: 'Ali Connors', msg: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar. Examine trends in the movement of guns across different states. Code of Federal Regulations - Alcohol, Tobacco Products and Firearms 1980-2014 November General Election Turnout and Registration. Reported Voting and Registration, by Sex and Single Years of Age: November 2016. Map felon disenfranchisement patterns by state.', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' }, { name: 'Cindy Baker', msg: 'Easily build highly personalized messages, and test multiple versions to see what works\u2014all in Mixpanel, no code required.', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }, { name: 'Deborah Lee', msg: 'Set detailed behavioral triggers, sequences, and rate limits for messages, to ensure that each campaign is relevant, timely, and delivered at the right pace.', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }]; let c = []; for (let d = 0; d < a; d++) for (let a = 0; a < b.length; a++)c.push(b[a]); return c
                })(1000000), //20000000 1000000 1000
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
