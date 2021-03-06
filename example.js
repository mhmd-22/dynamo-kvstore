const DynamoKVStore = require("./lib/");

const config = {
	endpoint: "http://localhost:7000",
	region: "us-east-2",
};

async function main() {
	try {
		// New table will be created if not exists
		// configs are passed to DocumentClient
		// Don't forget to check region also
		console.log("connected to database...");

		const db = await new DynamoKVStore("test2", config);
		db.cacheTimeout = 1000;

		console.log("connected!");

		// the value should be a valid DynamoDB Attribute
		await db.set("foo", "bar");

		let v = await db.get("foo");
		console.log(v);

		setTimeout(async () => {
			console.log(await db.foo);

			//or directly
			console.log(await db.foo);

			await db.delete("foo");
			// or db.remove

			console.log(await db.get("foo")); // undefined
		}, 2000);
	} catch (e) {
		console.error(e);
	}
}

main();
