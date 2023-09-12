# Debugging Log for Kintone x React App Setups

## Changing the Kintone Database Fields / Columns while connecting to a React App

### Common Problems

**REST API Endpoint**
Were you ever able to get data from your Kintone App? If not, verify that your Kintone REST API endpoint is correct.

* Steps: <https://dev.to/will_yama/how-to-get-data-from-a-web-database-3oa6#updating-the-rest-api-endpoint>
* ⚠️ Replace `{subdomain}` with the unique subdomain that your Kintone platform is running on.

**.env file & API Tokens**
Please verify that your `.env` file has the API Token to the correct (latest) Kintone App

* Steps: <https://dev.to/will_yama/how-to-get-data-from-a-web-database-3oa6#hide-the-api-token>
