//Solo se puede exportar una por defecto y se le puede asignar el nombre que se desee,
// y debe colocarse antes de las llaves.
import ExportDefault, {invoiceByClientName} from './data/invoices';
console.log('Buscando a Dyllan');
console.log(invoiceByClientName('Dyllan'));

//Con exportacion default.
console.log(ExportDefault('Dyllan'));