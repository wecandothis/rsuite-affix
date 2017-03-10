import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import { on, getOffset } from 'dom-lib';
import onResize from 'element-resize-event';


const Affix = React.createClass({
    propTypes: {
        offsetTop: PropTypes.number,
        onChange: PropTypes.func
    },
    getDefaultProps() {
        return {
            offsetTop: 0
        };
    },
    getInitialState() {
        return {
            offset: null,
            fixed: false,
            affixStyle: null
        };
    },
    updatePosition(event) {
        const { offset } = this.state;
        const { offsetTop, onChange } = this.props;
        const scrollY = window.scrollY;

        const container = findDOMNode(this.container);
        const overflow = scrollY - (offset.top - offsetTop) >= 0;

        let fixed = overflow ? true : false;
        let affixStyle = overflow ? {
            position: 'fixed',
            top: offsetTop,
            left: offset.left,
            width: offset.width
        } : null;

        if (fixed !== this.state.fixed) {
            this.setState({ fixed, affixStyle });
            onChange && onChange(fixed);
        }

    },
    releaseEvents() {
        this._scrollListener && this._scrollListener.off();
        this._resizeListener && this._resizeListener.off();
    },
    handleWindowResize() {
        setTimeout(() => {
            this.setContainerOffset();
        }, 1);
    },
    setContainerOffset() {
        const container = findDOMNode(this.container);
        this.setState({
            offset: getOffset(container)
        });
    },
    componentDidMount() {
        const container = findDOMNode(this.container);
        this._scrollListener = on(window, 'scroll', this.updatePosition);
        this._resizeListener = on(window, 'resize', this.handleWindowResize);
        this.setContainerOffset();

        onResize(container, this.setContainerOffset);
    },
    componentWillUnmount() {
        this.releaseEvents();
    },
    render() {

        const { children, className, style } = this.props;
        const { affixStyle } = this.state;
        const classes = classNames(className, {
            'rsuite-affix': affixStyle
        });

        const styles = {
            ...style,
            ...affixStyle
        };

        return (
            <div className={classes} style={styles} ref={(ref) => this.container = ref}>
                {children}
            </div>
        );
    }

});

export default Affix;
