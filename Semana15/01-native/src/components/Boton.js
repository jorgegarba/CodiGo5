import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';

const Boton = (props) => {
    let { texto, iconName, iconColor, iconSize,
        fullWidth, bgColor, action } = props;

    const { width } = fullWidth ? Dimensions.get('window') : {};
    return (
        <Button title={texto}
            onPress={action}
            buttonStyle={{
                width: width,
                backgroundColor: bgColor
            }}
            type="solid"
            icon={
                <Icon name={iconName}
                    size={iconSize}
                    color={iconColor} />
            } />
    )
}

export default Boton
