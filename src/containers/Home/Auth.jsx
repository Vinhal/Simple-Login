import React from 'react'
import {
    AuthContainer,
    StyledButton,
    StyledText
} from './style'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import Logo from 'assets/images/logo.jpeg'

const Activity = () => (
    <AuthContainer>
        <img src={Logo} alt="Logo" style={{ marginTop: '30px' }} />
        <Tabs value={0} indicatorColor="primary" textColor="primary" style={{ marginTop: '20px' }}>
            <Tab label="Login" />
            <Tab label="Registrar" />
        </Tabs>
        <div style={{ marginTop: '45px' }}>
            <TextField
                id="login-input"
                label="Login"
                margin="normal"
                style={{ width: '100%' }}
            />
            <TextField
                id="password-input"
                label="Senha"
                type="password"
                margin="normal"
                style={{ width: '100%' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end" >
                                <Visibility />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <StyledText>
                Esqueci a senha
            </StyledText>
            <StyledButton variant="contained" color="primary" >
                Acessar
            </StyledButton>
        </div>
    </AuthContainer>
)

export default Activity
