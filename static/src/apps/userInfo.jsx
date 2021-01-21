import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import Request from "../utils/request";
const { Header, Sider, Content } = Layout

class UserInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  async componentDidMount() {
    const userInfo = await Request.get({
      url: '/api/user/getUserInfo.json',
    })

    console.log('userInfo==>', userInfo)
  }

  render() {
    return (
        <Layout style={{ height: '100%' }}>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <div>用戶信息</div>
            </Header>
          </Layout>
        </Layout>
    )
  }
}


export default UserInfo