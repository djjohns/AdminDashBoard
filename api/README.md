## API:
### Building the docker image:

1. From the projects home directory navigate to the api directory.

    ```
    cd api
    ```

2. Build the docker image.

    ```
    docker build -t admin_dashboard_api .
    ```

3. Start the docker container to ensure everything is good.
    
    ```
    docker run -d --name admin_dashboard_api_container -p 3001:3001 admin_dashboard_api
    ```

4. Check the api in your favorite browser.

    [link to api on localhost](http://localhost:3001/)

---