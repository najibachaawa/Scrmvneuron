const data = [
   {
    id: "conversations",
    icon: "iconsminds-speach-bubble d-block",
    label: "Conversations",
    to: "/app/conversations",
    subs: []
  },
  {
    id: "notes",
    icon: "iconsminds-check d-block",
    label: "Notes",
    to: "/app/notes"
  },
  {
    id: "statspage",
    icon: "iconsminds-bar-chart-4 d-block",
    label: "menu.stats",
    to: "/app/",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.conversation",
        to: "/app/stats-page"
      },
      {
        icon: "iconsminds-bucket",
        label: "menu.userStat",
        to: "/app/userStat"
      }
    ]
  },
  
];
//debugger;
if(localStorage.getItem("role") == "admin"){
  var adminpath = {
    id: "admin",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.administration",
    to: "/app/admin/",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.second",
        to: "/app/admin/users"
      }
    ]
  }; 
  data.push(adminpath);
}
export default data;
