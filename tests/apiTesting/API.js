//#region GET REQUESTS FIXTURE & TESTS
fixture`GET request`
    .meta({ action: 'request', type: 'GET' })
test
    .meta({ test: '1' })
    ("List Users & Verify Response Status Code", async t => {
        const results = await t.request({
            url: `https://reqres.in/api/users?page=2`,
            method: "GET"
        });
        console.log(results.body);
        await t.expect(results.status).eql(200);
    });
test
    .meta({ test: '2' })
    ("List Users & Verify Element Property Value", async t => {
        const results = await t.request({
            url: `https://reqres.in/api/users?page=2`,
            method: "GET"
        });
        await t.expect(results.body.data[1].first_name).eql("Lindsay");
    });
//#endregion GET

//#region POST REQUESTS FIXTURE & TESTS
fixture`POST request`
    .meta({ action: 'request', type: 'POST' })
test
    .meta({ test: '1' })
    ("Create User & Verify Response Status Code", async t => {
        const data = {
            "name": "morpheus",
            "job": "leader"
        };

        const results = await t.request.post({
            url: `https://reqres.in/api/users`,
            body: data
        });

        console.log(results.body);
        await t.expect(results.status).eql(201);
    });
//#endregion

//#region PUT REQUESTS FIXTURE & TESTS
fixture`PUT request`
    .meta({ action: 'request', type: 'PUT' })
test
    .meta({ test: '1' })
    ("Update User & Verify Response Status Code", async t => {
        const data = {
            "name": "morpheus",
            "job": "zion resident"
        };

        const results = await t.request.put({
            url: `https://reqres.in/api/users/2`,
            body: data
        });

        console.log(results.body);
        await t.expect(results.status).eql(200);
    });
//#endregion

//#region DELETE REQUESTS FIXTURE & TESTS
fixture`DELETE request`
    .meta({ action: 'request', type: 'DELETE' })
test
    .meta({ test: '1' })
    ("Delete User & Verify Response Status Code", async t => {
        const results = await t.request.delete({
            url: `https://reqres.in/api/users/2`
        });
        await t.expect(results.status).eql(204);
    });
//#endregion