// 1 - definire una lista di todo e stamparli in pagina in un elenco
// 2 - predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
// 3 - al click su un item della lista, il todo viene rimosso
// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo

var app = new Vue({
    el: "#root",
    data: {
        titolo: "Todo list 11/11/2020",
        listatodo: ["andare in farmacia", "comprare il caffè", "ripetere vue", "pagare la bolletta", "innaffiare le piante"],
        bottone: "Aggiungi",
        nuovoitem: ""
    },
    methods: {
        additem(){
            if(this.nuovoitem != ""){
                this.listatodo.push(this.nuovoitem);
                this.nuovoitem = "";
            }else{
                alert("Inserisci qualcosa da fare!")
            }
        },
        removeitem(index){
            this.listatodo.splice(index, 1);
        }
    }
});
