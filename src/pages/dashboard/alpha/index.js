import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/Layout/Authorize'

class DashboardAlpha extends React.Component {
  render() {
    console.log('Here is dashboard')
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="Dashboard Alpha" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Empty Page</strong>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                [src\pages\dashboard\alpha\index.js]
              </div>
            </div>
          </div>
        </div>
      </Authorize>
    )
  }
}

export default DashboardAlpha
