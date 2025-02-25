const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
    instance: {
        instanceId: 'nodejs-service-1',
        app: 'nodejs-service',
        hostName: 'localhost', 
        ipAddr: '127.0.0.1',
        port: {
            '$': 3000,
            '@enabled': 'true',
        },
        vipAddress: 'nodejs-service',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/'
    }
});

// Start Eureka client
client.start((error) => {
    if (error) {
        console.error('Eureka client failed to start:', error);
    } else {
        console.log('Eureka client started successfully');
    }
});
