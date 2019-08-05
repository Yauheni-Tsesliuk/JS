const frisby = require('frisby');
var input_data = require('./input_data');

             

it ('RP Dashboard Controller Create/Delete ', function (done) {
    
   return frisby.setup({
        request:{
            headers:{
                'Accept': 'application/json',
                'Authorization': 'bearer 760d8ec1-97f7-4f9f-8824-402d45718b7d'
            }
        }
    })
      .get(input_data.rp_base_url+input_data.rp_project+'/dashboard')
      .expect('status', 200)         
          .then(function(res){
                var body_json = JSON.parse(res['body']) 
                var num_records = Object.keys(body_json).length;
                var i;
                
                for (i = 0; i < num_records; i++) {
                    //console.log('Check!' + num_records + ' ' + res.json[i].name);
                    if (res.json[i].name == input_data.rp_name_dashboard)
                    {
                            frisby.setup({
                            request:{
                                headers:{
                                    'Accept': 'application/json',
                                    'Authorization': 'bearer 760d8ec1-97f7-4f9f-8824-402d45718b7d'
                                }
                            }
                        })
                          .del(input_data.rp_base_url+input_data.rp_project+'/dashboard/'+res.json[i].id, {})
                          .expect('status', 200)
                          .then(function(res){
                            return frisby
                            .setup({
                                request:{
                                    headers:{
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Authorization': 'bearer 760d8ec1-97f7-4f9f-8824-402d45718b7d'
                                    }
                                }
                            })
                              .post('https://rp.epam.com/api/v1/yauheni_tsesliuk_personal/dashboard', {
                                description: 'Test JS Dashboard1',
                                name: 'XXX123',
                                share:true
                             })
                             .expect('status', 201)
                            .then(function(res){
                                var body_json = JSON.parse(res['body']) 
                                var num_records = Object.keys(body_json).length;
                                // expect(res.json[0].owner).toBe('yauheni_tsesliuk');
                                // expect(res.json[0].name).toBe('DEMO DASHBOARD#1');
                               
                             });
                          })
                    }
                }
               
        
            })
 
     .done(done)
    
  });

