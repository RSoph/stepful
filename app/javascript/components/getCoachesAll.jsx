export function getCoachesAll(data) {
    return fetch('/coaches', {
        method: 'GET',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            setCoachesAll(response.json)
          } else {
           console.log('Somthing happened wrong');
          }
    }).catch(err => err);
}