const readline = require('readline')

function getResponse(question1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise(resolve => {
    rl.question(question1, resp => {
      resolve(resp)
      rl.close()
    })
  })
}

//Observer
function girlFriend() {
  console.log('N: Apagar as luzes...')
  console.log('N: Pedir silencio...')
  console.log('N: Surpresa...')
}

//Observer
function liquidator(event) {
  console.log('S: Monitorar barulho...')
  console.log(event.resp)
  console.log(event.date)
}

//Subject
async function concierge(interested) {
  while (true) {
    const resp = await getResponse('O namorado chegou? (s/N/q)')
    if (resp.toLowerCase() === 's') {
      // os observadores são notificados
      (interested || []).forEach(obs => obs({ resp, date: Date.now() }))
    } else if (resp.toLowerCase() === 'q') {
      break
    }
  }
}

/*
  Chamada da função -> Registra os dois observadores!
  Os observadores são: namorada e sindico
  O subject é o porteiro!
*/
concierge([girlFriend, liquidator])