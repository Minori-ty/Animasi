import { useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Button, Image, Overlay } from 'react-native-elements'
import ImageView from 'react-native-image-viewing'

export default function App() {
    const [visible, setVisible] = useState(false)
    const [visibled, setIsVisible] = useState(false)
    const arr = []

    for (let i = 0; i < 20; i++) {
        arr.push({ uri: `https://picsum.photos/200/300?id=${i}` })
    }
    const toggleOverlay = () => {
        setVisible(!visible)
    }
    return (
        <ScrollView style={styles.container}>
            <ImageView
                images={arr}
                style={{ width: 200, height: 200 }}
                imageIndex={0}
                visible={visibled}
                onRequestClose={() => setIsVisible(false)}
            />
            <Image
                source={{ uri: 'https://gitee.com/dwxdfhx/aliyunDDns/raw/master/document/imgs/golang.jpg' }}
                style={{ width: 200, height: 200 }}
            />
            <Button title="Open Overlay" onPress={toggleOverlay} />

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text>Hello from Overlay!</Text>
            </Overlay>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
