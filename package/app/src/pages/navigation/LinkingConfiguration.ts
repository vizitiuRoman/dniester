export default {
    prefixes: ['https://olimpbooking.com', 'olimpbooking://'],
    config: {
        screens: {
            Notifications: {
                screens: {
                    NotificationsScreen: 'notification',
                },
            },
            Services: {
                screens: {
                    ServicesScreen: 'services',
                },
            },
            Auth: {
                screens: {
                    Welcome: {
                        screens: {
                            WelcomeScreen: 'welcome',
                        },
                    },
                },
            },
        },
    },
};
