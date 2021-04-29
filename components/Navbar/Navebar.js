import React from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@material-ui/core'

const Navebar = () => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography>Header</Typography>

                    <Tabs>
                        <Tab label='Home'/>
                    </Tabs>
                    <Tabs>
                        <Tab label='About'/>
                    </Tabs>
                    <Tabs>
                        <Tab label='Contact'/>
                    </Tabs>
                </Toolbar>
            </AppBar> 
        </>
    )
}

export default Navebar
