/* */

let templaterCodeCharter = `

<div>


<el-drawer
:title=" charaterListElement.name"
:visible.sync="drawer"
:direction="direction"
size="100%"
style="font-size:54px;text-align:left;"
:before-close="handleClose" over>
<div class="charaitem"  style="width:500px;height:500px;font-size:54px;" v-bind:style="frontcoverColor"></div>
<pre>
` + '${charaterListElement.discrip}' + `
</pre>
</el-drawer>


    <div class="charaitem" v-bind:style="frontcoverColor"  @click="drawer = true">

        <div>
            <div class="charaterElement" >
                <div class="leftcover">
                    <pre class="middlecover">` + '${ charaterListElement.name}' + `</pre>
                </div>
                <div class="rightcover"></div>

            </div>
        </div>

    </div>
</div>


`;

let templaterCodeCharter_slice = `  
<el-carousel :interval="4000" type="card" height="200px">
<el-carousel-item v-for="item in 2" :key="item">
  <h3 class="medium">{{ item }}</h3>
</el-carousel-item>
</el-carousel>`;
Vue.component('charter-element', {
    template: templaterCodeCharter,
    props: ['charaterElement'],
    delimiters: ['${', '}'],

    data: function () {
        return {
            drawer: false,
            direction: 'rtl',
            // charaterListElement: this.charaterElement,

        }
    },
    methods: {
        handleClose(done) {
            done();
        }
    },
    computed: {
        charaterListElement() {
            return this.charaterElement;
        },
        frontcoverColor() {
            return {
                'background-image': `url(${this.charaterElement.img})`
            }
        },
    }
});