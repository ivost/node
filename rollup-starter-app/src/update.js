import format from 'date-fns/format';

export default function update() {
	let now = format(new Date(), 'h:mm:ssa');
	console.log(now);
	setTimeout(update, 1000);
}