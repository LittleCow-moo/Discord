const alphlist = ['๐ฆ','๐ง','๐จ','๐ฉ','๐ช','๐ซ','๐ฌ','๐ญ','๐ฎ','๐ฏ','๐ฐ','๐ฑ','๐ฒ','๐ณ','๐ด','๐ต','๐ถ','๐ท','๐ธ','๐น','๐บ','๐ป','๐ผ','๐ฝ','๐พ','๐ฟ']
module.exports = (client,message)=>{
  message.channel.send('ๅ!ๆ็ฅจๅงๅฎนๆฏไป้บผ?')
  message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 })
        .then((collecte)=>{   
          const pollmsg = collecte.first().content
          message.channel.send('ๅ!ๆ็ฅจ้ธ้ ๆๅชไบ?ไฝฟ็จ\`;\`ๅ้้ธ้ !')
          message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 })
        .then((collected)=>{
          const pollopt = collected.first().content.split(';')
                if (pollopt.length>20){
                cowmessage.channel.send('ๅ!ๅคชๅค้ธ้ ไบ!')
                return
                }
                let pollemotes = []
                pollopt.forEach((item,index)=>{
            pollopt[index]=`${alphlist[index]}-${item}`
                    pollemotes.push(alphlist[index])
                })
                  message.channel.send(`${pollmsg}\n${pollopt.join('\n')}`).then(async (custompoll) => {
                    pollemotes.forEach(item=>{
                         custompoll.react(item)
					})             
          
        })
        })
})}