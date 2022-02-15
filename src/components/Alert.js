import React from 'react'
//import PropTypes from 'prop-types'
import './TextForm.css'
export default function Alert(props) {
  return (
    

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} id="alertr" role="alert">
              <strong>Success</strong> : {props.alert.msg}
            </div>

  )
}
