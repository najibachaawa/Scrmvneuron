import React, { Component, Fragment } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, CardBody, CardTitle } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Bar, Line } from "react-chartjs-2";

export default class StatsUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataGroupedByDate: "",
      Loading: true,
      users_statistics :[],
      chartPerDate: {
        labels: [],
        datasets: [
          {
            label: "message",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [],
          },
        ],
      },
    };
  }

  async componentDidMount() {
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lamliYTE5OTZAZ21haWwuY29tIiwiaWQiOiI1ZWZjZDZiZDVkMDE2ODFkMzA5N2ViYjMiLCJleHAiOjE1OTkzOTI3MDEsImlhdCI6MTU5NDIwODcwMX0.CDZI4W4lx1hW_VqFX43ojSdANfr-zykN-QGOfoXOMlE`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonresponse) => {
        var users_statistics = [];
        jsonresponse.forEach((user, index) => {
          users_statistics.push(user);
        });
        users_statistics.sort((user1, user2) =>
          user1.convs.length < user2.convs.length ? 1 : -1
        );
        this.state.users_statistics = users_statistics;
        this.setState(this.state);
      });
  }

  render() {
    var data = [{thumb:"thumb",title:"title",detail:"details"}]
    return (
      <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="Users.stat" />
        </CardTitle>
        <div className="dashboard-list-with-user">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {this.state.users_statistics.map((user, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-row mb-3 pb-3 border-bottom">
                  <NavLink to="/app/pages/product/details">
                    <img 

                      src={"https://ui-avatars.com/api/?name=" + user.name + "+" + user.lastname}
                      alt={user.name + " " + user.lastname + " photo"}
                      className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                    />
                  </NavLink>

                  <div className="pl-3 pr-2">
                    <NavLink to="/app/pages/product/details">
                      <p className="font-weight-medium mb-0 ">{user.name + " " + user.lastname}</p>
                      <p className="text-muted mb-0 text-ksmall">
                        {user.convs.length + " converstaions ."}
                      </p>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
    );
  }
}

/*

axios.get('https://graph.facebook.com/v7.0/103810704730785/conversations?access_token=EAADoZBAD37iEBADuJvvzCjEZAOPUm3MBZAalLbbuqGpo0CgvatlFwZAaamEdG8Wsvk77kEqAZByXBeROjlR7GU4kRhZAmFtibK2c38NW1tivMsbGL1pARQ0vKZAOZCQAmaHkxzRkztZAtJm8MklhRHktuan7RJwszv0WzLqSKdeLBhKWA1blvm7dN&fields=messages', { headers: { "Authorization": `Bearer ${this.state.token}` } })
      .then(res => {
        this.setState({
          dataGroupedByDate: res.data.data
        });
        let values = []
        let idsList = []
        let labels = []
        let datas = []
        let labelsIds = []
        let datasIds = []
        let body = this.state.chartPerDate
        let bodyids = this.state.chartPerConversation

        let occ
        let idsOcc

        let dataPerDate = this.state.dataGroupedByDate.map(x => x.messages.data)
        this.state.dataGroupedByDate.map((x, i) => {
          labelsIds.push("conversation: " + i)
          datasIds.push(x.messages.data.length)

        })
        debugger

      })
      .catch((error) => {
        console.log(error);
      })
    */
