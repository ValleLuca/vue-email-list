var app = new Vue({
    el: '#app',
    data: {
        mailTotali: null,
        mailSelezionata: null,
        mail: [],
    },

    methods: {
        invioMail: function(){
            if(this.mailTotali != 10){
                for(let i = 0; i < 10; i++){
                    this.mailTotali = i + 1;
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.mail.push({
                            emailUtenti: response.data.response,
                        });
    
                    })
                    .catch(function(error){
                        console.log(error);
                    });
                }
            }
            else
            {
                this.mail = [];
                this.mailTotali = "";
            }
            
        },
        selMail: function(indice){
            this.mailSelezionata = indice;
        }
    }
  })


  /*
  mounted: function(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.mail = response.data.response;
            })
            .catch(function(error){
                console.log(error);
            });


    },
  */