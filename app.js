function generateDomainName(){
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    for(let item of pronoun){
        for(let item2 of adj){
            for(let item3 of noun){
                console.log(item+item2+item3+".com");
            }
        }
    }
}

generateDomainName();