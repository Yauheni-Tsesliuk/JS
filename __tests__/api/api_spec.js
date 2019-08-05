const frisby = require('frisby');

it('GET: Example Test', function () {
  return frisby.get('http://httpbin.org/status/418')
    .expect('status', 418);
});
const uuid_rp = '760d8ec1-97f7-4f9f-8824-402d45718b7d';

/*it ('GET: RP activity-controller : Activity Controller 200 ', function () {
    return frisby
    .setup({
        request:{
            headers:{
                'Accept': 'application/json',
                'Authorization': 'bearer 760d8ec1-97f7-4f9f-8824-402d45718b7d'
            }
        }
    })
      .get('https://rp.epam.com/api/v1/yauheni_tsesliuk_personal/activity', {
        
     })
     //.inspectJSON()
     //.expect('status', 200)
      //.toss();
  });

 /* it ('GET: RP Dashboard Controller 200 ', function () {
    return frisby
    .setup({
        request:{
            headers:{
                'Accept': 'application/json',
                'Authorization': 'bearer 760d8ec1-97f7-4f9f-8824-402d45718b7d'
            }
        }
    })
      .get('https://rp.epam.com/api/v1/yauheni_tsesliuk_personal/dashboard', {
        
     })
     .expect('status', 200)
     .then(function(res){
         let postId = res.json[0].owner;
         var t = res.json[0].owner;
         console.log(t + ' Hop Hey!');
         expect(res.json[0].owner).toBe('yauheni_tsesliuk');
         expect(res.json[0].name).toBe('DEMO DASHBOARD#1');
         //DEMO DASHBOARD#1

     })
     
  });*/

  