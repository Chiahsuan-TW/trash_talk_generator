function randomIndex(array) {
    const Index = Math.floor(Math.random()*array.length)
    return Index
 }

function generateTrashTalk(option) {
    //define task and phrases
    const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code', 'debug一下'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計', '調整一下版面', '換個風格'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }
    const phrase = ['很簡單','很容易','很快','很正常','小CASE']

    //define the opening and ending words
    let trashTalk = '身為一個'
    let exclamation = '吧!'

    //randomly pick the task acc. to user's choice of target
    if (option.job === 'engineer') {
      trashTalk += '工程師，'
      trashTalk += task.engineer[randomIndex(task.engineer)]
    }
    if (option.job === 'designer') {
      trashTalk += '設計師，'
      trashTalk += task.designer[randomIndex(task.designer)]
    }
    if (option.job === 'entrepreneur') {
      trashTalk += '創業家，'
      trashTalk += task.entrepreneur[randomIndex(task.entrepreneur)]
    }

    //return error message when no carrer is selected
    if(!option.job) {
      return 'Please select one job title to generate the trash talk!'
      
    }
    //combine the sentences
    trashTalk += '，'+ phrase[randomIndex(phrase)] + exclamation
  
    //return trash talk
    return trashTalk

}


module.exports = generateTrashTalk