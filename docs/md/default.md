
```html
import React from 'react';
import Affix from 'rsuite-affix';

import { Navbar ,Button } from 'rsuite';

export default () => {
    return (
        <div className="doc-example">
            <Affix offsetTop={50} >
                <Navbar >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href='#'>Affix Navbar , top 50</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </Affix>

             <Affix offsetTop={200} >
                <Button shape="primary" >Affix Button, top 200</Button>
             </Affix>
        </div>
    );
};

```
