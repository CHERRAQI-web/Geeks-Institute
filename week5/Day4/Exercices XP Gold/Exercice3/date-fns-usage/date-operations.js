import { format } from 'date-fns';
import { addDays } from 'date-fns';
function formatdate(){
    const today = new Date();
console.log("date et l'heure d'aujourd'hui :", format(today, 'dd/MM/yyyy HH:mm:ss'));
const futureDate = addDays(today, 5);
console.log("date et l'heure après 5jours :", format(futureDate, 'dd/MM/yyyy HH:mm:ss'));

}
export default formatdate;
