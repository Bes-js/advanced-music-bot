const moment = require("moment");
module.exports = class Logger {
	static log (content) {
		const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
		 console.log(`[${date}] ${content}`);
	}
};