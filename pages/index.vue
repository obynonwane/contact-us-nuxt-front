<template>
  <v-app class="index-lay">
      <v-main>

         <MenuBar />
        <v-container>
            <v-row>
              <v-col>
                <section>
                  <p class="text-header">Get Quick Affordable Services</p>
                  <br>
                  <p class="btn-page">
                     <v-btn
                      elevation="2"
                      x-large
                      color="#0184E2"
                      background-color="#0184E2"
                      class="header-btn"
                     
                    >Quick Service</v-btn>
                    
                    <v-btn
                      elevation="2"
                      x-large
                      color="#0184E2"
                      background-color="#0184E2"
                      class="header-btn"
                    >Book Service</v-btn>
                  </p>
                </section>
              </v-col>

              <v-spacer></v-spacer>
              <v-col>
                <v-img
                :lazy-src="require('@/assets/worker.png')"
                max-height="400"
                max-width="400"
                :src="require('@/assets/worker.png')">
                </v-img>
            </v-col>
         </v-row>


         <v-row>
          <v-col>
             <v-card >
            <v-card-title  class="visited-title"> 
              <p>Most Visited Category</p>
            </v-card-title>
           </v-card>
          </v-col>
         </v-row>

         <v-row>
           <v-col>
             <v-hover>
             <v-card xs="12">
               <v-img
                  :src="require('@/assets/worker.png')"
                  height="170"
                  width="170"
                  :lazy-src="require('@/assets/worker.png')"
                  class="white darken-4"
                ></v-img>
                <v-card-title class="cat-title title">
                  Mechanical Engineer
                </v-card-title>
            </v-card>
            </v-hover>
           </v-col>
           <v-col xs="12">
               <v-card>
               <v-img
                  :src="require('@/assets/worker.png')"
                  height="170"
                  width="170"
                  :lazy-src="require('@/assets/worker.png')"
                  class="white darken-4"
                ></v-img>
                <v-card-title class="cat-title title">
                  Mechanical Engineer
                </v-card-title>
            </v-card>
           </v-col>
           <v-col xs="12">
              <v-card>
               <v-img
                  :src="require('@/assets/worker.png')"
                  height="170"
                  width="170"
                  :lazy-src="require('@/assets/worker.png')"
                  class="white darken-4"
                ></v-img>
                <v-card-title class="cat-title title">
                  Mechanical Engineer
                </v-card-title>
            </v-card>
           </v-col>
           <v-col xs="12">
              <v-card>
               <v-img
                  :src="require('@/assets/worker.png')"
                  height="170"
                  width="170"
                  :lazy-src="require('@/assets/worker.png')"
                  class="white darken-4"
                ></v-img>
                <v-card-title class="cat-title title">
                  Mechanical Engineer
                </v-card-title>
            </v-card>
           </v-col>
         </v-row>

         <v-row class="testi-section">
           <v-col xs="12">
        
             <section>
               <iframe width="500" height="250" src="https://www.youtube.com/embed/1gn_LRT-W7k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </section>
             
           </v-col>
           <v-col xs="12">
             <section>
               <blockquote class="testimonial-text text-right">
            <span style="font-size:0.9em;"
              >This Platform is Innovative, I have never ran short of people,
              who can help <br />solve problems since I started and get
              Introduced to this platform it helps <br />solve most of the needs
              that require me running up and down searching for reliable
              engineers <br />Who cn fix it. Contactme.com takes the hassles for
              your and let you enjoy your calmness while the work gets done
              <br /></span
            ><em>----Chioma---</em>
            </blockquote>
             </section>
           </v-col>
         </v-row>

          <v-row>
          <v-col>
             <v-card >
            <v-card-title  class="visited-title"> 
              <p>How it works</p>
            </v-card-title>
           </v-card>
          </v-col>
         </v-row>


          <v-row style="margin-bottom:100px">
           <v-col>
             <v-hover>
             <v-card xs="12">
                <section class="how-to-3">
                <p class="how-to-head">Signup</p>
                <p class="how-to-body">
                  Sign up to the platform for free to be able to access our services
                </p>
                <p class="how-to-footer">
                  Learn More
                </p>
              </section>
            </v-card>
            </v-hover>
           </v-col>
           <v-col xs="12">
               <v-card>
                 <section class="how-to-3">
                <p class="how-to-head">Quick services</p>
                <p class="how-to-body">
                 Get the services you need at the moment from our platform quick, fast and reliable
                </p>
                <p class="how-to-footer">
                  Learn More
                </p>
              </section>
            </v-card>
           </v-col>
           <v-col xs="12">
              <v-card>
              <section class="how-to-3">
                <p class="how-to-head">Quick services</p>
                <p class="how-to-body">
                 Book for the various services on our platform
                </p>
                <p class="how-to-footer">
                  Learn More
                </p>
              </section>
            </v-card>
           </v-col>
         
         </v-row>
        </v-container>

        <FooterBar />
      </v-main>

  </v-app>
</template>

<script>
import MenuBar from '@/components/menu'
import FooterBar from '@/components/footer'
export default {

   data(){
     return{
       fav: true,
       menu: false,
       message: false,
       hints: true,

        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
     }
   },
  components: {
    MenuBar,
    FooterBar
  }
}
</script>
<style scoped>
.index-lay{ 
  margin-right:0px;
  margin-left:0px;
  padding-right:0px ;
  padding-left: 0px;
  background-color:#ffffff;
  color:#000000
}
.btn-page{
  margin-top:40px;
  text-align: center;
}
.text-header{
 
  width: 414px;
  height: 225px;
  left: 91px;
  top: 118px;
  font-family: Roboto Mono;
  font-style: italic;
  font-weight: 500;
  font-size: 64px;
  line-height: 84px;
  text-align: center;
  color: #000000;
}

.header-btn{
  width: 179px;
  height: 54px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  text-align: center;
  margin-bottom: 10px;
  padding-bottom:10px;
  margin-right:5px ;
}

.visited-title{
  background-color:#e6e6e6;
  margin:0px;
  padding:5px;
  padding-top:10px;
  padding-left:20px;
  margin-top: 100px;
  color:#000000;
} 
.cat-title {
  color:#000000;
  background-color: #ffffff;
}

.testi-section{
  margin-top:100px;
  margin-bottom: 100px;
}
.testimonial-text{
  color:#000000;
  margin-top:50px;
}
.how-to-3{
   text-align: center;
   background-color:#ffffff;
   color:#000000;
   padding: 10px;
}
.how-to-head{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #0184E2;
}
.how-to-body{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #000000;
}
.how-to-footer{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #00397F;
}

</style>