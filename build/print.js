
const print = {
	complete: (filename) => {
		console.log(`Build "${filename}" completed.`);
	},
	fail: (filename) => {
		console.error(`Build "${filename}" failed.`);
	}
};

module.exports = print;
