import React from 'react';
import ReactDOM from 'react-dom';

import { Header, Navbar, Nav, Row, Col } from 'rsuite';
import { Markdown } from 'markdownloader';

import './less/index.less';

import AffixTop from './examples/AffixTop';


const App = React.createClass({
    render() {
        return (
            <div className='doc-page'>
                <Header inverse>
                    <div className='container'>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='#'><span className='prefix'>R</span>Suite  Affix</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <Nav.Item href='https://github.com/rsuite/rsuite-affix'>GitHub</Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Header>

                <div className='container'>
                    <h3>Affix 固钉</h3>
                    <br />
                    <h4>默认的</h4>
                    <AffixTop />
                    <Markdown>
                        {require('./md/default.md')}
                    </Markdown>

                    <br />
                    <h4>属性</h4>
                    <Markdown>
                        {require('./md/props.md')}
                    </Markdown>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App />,
    document.getElementById('app')
);
