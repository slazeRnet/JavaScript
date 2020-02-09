function processTickets(input, sortingParameter){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination,
            this.price = parseFloat(price),
            this.status = status
        }
    }
    function compare(a, b){
        let comparisonParameter = sortingParameter;

        if(a[comparisonParameter] < b[comparisonParameter]){
            return - 1
        }
        else if(a[comparisonParameter] > b[comparisonParameter]){
            return 1;
        }

        return 0;
    }
    let arr = input;
    let tickets = new Array;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let tempTicket = element.split('|');

        let ticket = new Ticket(tempTicket[0], tempTicket[1],tempTicket[2]);
        tickets.push(ticket);
    }
    tickets.sort(compare);
    
    return tickets;
}


processTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')
processTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')
