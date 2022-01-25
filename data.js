var app = new Vue({
    el: '#app',
    data: {
        mail: [],
    },

    methods: {
        invioMail: function(){
            for(let i = 0; i < 10; i++){
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
        },
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