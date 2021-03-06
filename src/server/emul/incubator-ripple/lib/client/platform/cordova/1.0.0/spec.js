/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
module.exports = {
    id: "cordova",
    version: "1.0.0",
    name: "Apache Cordova / PhoneGap",
    type: "platform",

    persistencePrefix: "phonegap-",

    config: ripple('platform/cordova/1.0.0/spec/config'),
    device: ripple('platform/cordova/1.0.0/spec/device'),
    ui: ripple('platform/cordova/1.0.0/spec/ui'),
    events: ripple('platform/cordova/1.0.0/spec/events'),

    initialize: function () { },

    objects: {
        PhoneGap: {
            path: "cordova/1.0.0/PhoneGap"
        },
        Coordinates: {
            path: "w3c/1.0/Coordinates"
        },
        Position: {
            path: "w3c/1.0/Position"
        },
        PositionError: {
            path: "w3c/1.0/PositionError"
        },
        Acceleration: {
            path: "cordova/1.0.0/Acceleration"
        },
        navigator: {
            path: "cordova/1.0.0/navigator",
            children: {
                accelerometer: {
                    path: "cordova/1.0.0/accelerometer"
                },
                geolocation: {
                    path: "w3c/1.0/geolocation"
                },
                notification: {
                    path: "cordova/1.0.0/notification"
                },
                contacts: {
                    path: "cordova/1.0.0/contacts"
                },
                network: {
                    path: "cordova/1.0.0/network"
                },
                camera: {
                    path: "cordova/1.0.0/camera"
                },
                sms: {
                    path: "cordova/1.0.0/sms"
                },
                telephony: {
                    path: "cordova/1.0.0/telephony"
                },
                map: {
                    path: "cordova/1.0.0/map"
                },
                orientation: {
                    path: "cordova/1.0.0/orientation"
                },
                system: {
                    path: "cordova/1.0.0/system"
                },
                compass: {
                    path: "cordova/1.0.0/compass"
                }
            }
        },
        ContactError: {
            path: "cordova/1.0.0/ContactError"
        },
        Contact: {
            path: "cordova/1.0.0/Contact"
        },
        ContactName: {
            path: "cordova/1.0.0/ContactName"
        },
        ContactAccount: {
            path: "cordova/1.0.0/ContactAccount"
        },
        ContactAddress: {
            path: "cordova/1.0.0/ContactAddress"
        },
        ContactOrganization: {
            path: "cordova/1.0.0/ContactOrganization"
        },
        ContactFindOptions: {
            path: "cordova/1.0.0/ContactFindOptions"
        },
        ContactField: {
            path: "cordova/1.0.0/ContactField"
        },
        NetworkStatus: {
            path: "cordova/1.0.0/NetworkStatus"
        },
        device: {
            path: "cordova/1.0.0/device"
        },
        SystemInfoOptions: {
            path: "cordova/1.0.0/SystemInfoOptions"
        },
        PowerAttributes: {
            path: "cordova/1.0.0/PowerAttributes"
        },
        CPUAttributes: {
            path: "cordova/1.0.0/CPUAttributes"
        },
        ThermalAttributes: {
            path: "cordova/1.0.0/ThermalAttributes"
        },
        NetworkAttributes: {
            path: "cordova/1.0.0/NetworkAttributes"
        },
        Connection: {
            path: "cordova/1.0.0/Connection"
        },
        ConnectionAttributes: {
            path: "cordova/1.0.0/ConnectionAttributes"
        },
        SensorAttributes: {
            path: "cordova/1.0.0/SensorAttributes"
        },
        AVCodecsAttributes: {
            path: "cordova/1.0.0/AVCodecsAttributes"
        },
        AudioCodecAttributes: {
            path: "cordova/1.0.0/AudioCodecAttributes"
        },
        VideoCodecAttributes: {
            path: "cordova/1.0.0/VideoCodecAttributes"
        },
        StorageUnitAttributes: {
            path: "cordova/1.0.0/StorageUnitAttributes"
        },
        InputDevicesAttributes: {
            path: "cordova/1.0.0/InputDevicesAttributes"
        },
        OutputDevicesAttributes: {
            path: "cordova/1.0.0/OutputDevicesAttributes"
        },
        DisplayDeviceAttributes: {
            path: "cordova/1.0.0/DisplayDeviceAttributes"
        },
        AudioDeviceAttributes: {
            path: "cordova/1.0.0/AudioDeviceAttributes"
        },
        PrintingDeviceAttributes: {
            path: "cordova/1.0.0/PrintingDeviceAttributes"
        },
        BrailleDeviceAttributes: {
            path: "cordova/1.0.0/BrailleDeviceAttributes"
        },
        PointerAttributes: {
            path: "cordova/1.0.0/PointerAttributes"
        },
        KeyboardAttributes: {
            path: "cordova/1.0.0/KeyboardAttributes"
        },
        CameraAttributes: {
            path: "cordova/1.0.0/CameraAttributes"
        },
        MicrophoneAttributes: {
            path: "cordova/1.0.0/MicrophoneAttributes"
        }
    }

};
