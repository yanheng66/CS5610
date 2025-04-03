import { View, Text } from 'react-native'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function LogoutButton() {
    useAuth0();
    return (
        <View>
            <Text>LogoutButton</Text>
        </View>
    )
}