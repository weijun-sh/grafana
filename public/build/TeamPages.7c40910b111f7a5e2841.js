"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8612],{"./public/app/core/components/SharedPreferences/SharedPreferences.tsx":(e,s,t)=>{t.d(s,{Z:()=>j,v:()=>x});var a,n,r,i,o=t("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js"),c=t("./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js"),d=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),m=t("./packages/grafana-e2e-selectors/src/index.ts"),h=t("./packages/grafana-ui/src/index.ts"),u=t("./public/app/core/services/PreferencesService.ts"),p=t("./public/app/core/services/backend_srv.ts"),g=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function b(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const f=[{value:"",label:c.ag._({id:"shared-preferences.theme.default-label",message:"Default"})},{value:"dark",label:c.ag._({id:"shared-preferences.theme.dark-label",message:"Dark"})},{value:"light",label:c.ag._({id:"shared-preferences.theme.light-label",message:"Light"})}];class x extends l.PureComponent{constructor(e){super(e),b(this,"service",void 0),b(this,"onSubmitForm",async()=>{const{homeDashboardId:e,theme:s,timezone:t,weekStart:a}=this.state;await this.service.update({homeDashboardId:e,theme:s,timezone:t,weekStart:a}),window.location.reload()}),b(this,"onThemeChanged",e=>{this.setState({theme:e})}),b(this,"onTimeZoneChanged",e=>{e&&this.setState({timezone:e})}),b(this,"onWeekStartChanged",e=>{this.setState({weekStart:e})}),b(this,"onHomeDashboardChanged",e=>{this.setState({homeDashboardId:e})}),b(this,"getFullDashName",e=>void 0===e.folderTitle||""===e.folderTitle?e.title:e.folderTitle+" / "+e.title),this.service=new u.y(e.resourceUri),this.state={homeDashboardId:0,theme:"",timezone:"",weekStart:"",dashboards:[]}}async componentDidMount(){const e=await this.service.load(),s=await p.ae.search({starred:!0});if(e.homeDashboardId>0&&!s.find(s=>s.id===e.homeDashboardId)){const t=await p.ae.search({dashboardIds:[e.homeDashboardId]});t&&t.length>0&&s.push(t[0])}this.setState({homeDashboardId:e.homeDashboardId,theme:e.theme,timezone:e.timezone,weekStart:e.weekStart,dashboards:[{id:0,title:"Default",tags:[],type:"",uid:"",uri:"",url:"",folderId:0,folderTitle:"",folderUid:"",folderUrl:"",isStarred:!1,slug:"",items:[]},...s]})}render(){const{theme:e,timezone:s,weekStart:t,homeDashboardId:d,dashboards:l}=this.state,{disabled:u}=this.props,p=v(),b=a||(a=(0,g.jsx)(h.Tooltip,{content:(0,g.jsx)(o.cC,{id:"shared-preferences.fields.home-dashboard-tooltip"}),children:(0,g.jsx)(h.Icon,{name:"info-circle"})}));return(0,g.jsx)(h.Form,{onSubmit:this.onSubmitForm,children:()=>{var a;return(0,g.jsxs)(h.FieldSet,{label:n||(n=(0,g.jsx)(o.cC,{id:"shared-preferences.title"})),disabled:u,children:[(0,g.jsx)(h.Field,{label:c.ag._({id:"shared-preferences.fields.theme-label",message:"UI Theme"}),children:(0,g.jsx)(h.RadioButtonGroup,{options:f,value:null===(a=f.find(s=>s.value===e))||void 0===a?void 0:a.value,onChange:this.onThemeChanged})}),(0,g.jsx)(h.Field,{label:(0,g.jsxs)(h.Label,{htmlFor:"home-dashboard-select",children:[(0,g.jsx)("span",{className:p.labelText,children:r||(r=(0,g.jsx)(o.cC,{id:"shared-preferences.fields.home-dashboard-label"}))}),b]}),"data-testid":"User preferences home dashboard drop down",children:(0,g.jsx)(h.Select,{value:l.find(e=>e.id===d),getOptionValue:e=>e.id,getOptionLabel:this.getFullDashName,onChange:e=>this.onHomeDashboardChanged(e.id),options:l,placeholder:c.ag._({id:"shared-preferences.fields.home-dashboard-placeholder",message:"Choose default dashboard"}),inputId:"home-dashboard-select"})}),(0,g.jsx)(h.Field,{label:c.ag._({id:"shared-dashboard.fields.timezone-label",message:"Timezone"}),"data-testid":m.wl.components.TimeZonePicker.containerV2,children:(0,g.jsx)(h.TimeZonePicker,{includeInternal:!0,value:s,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})}),(0,g.jsx)(h.Field,{label:c.ag._({id:"shared-preferences.fields.week-start-label",message:"Week start"}),"data-testid":m.wl.components.WeekStartPicker.containerV2,children:(0,g.jsx)(h.WeekStartPicker,{value:t,onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})}),(0,g.jsx)("div",{className:"gf-form-button-row",children:(0,g.jsx)(h.Button,{type:"submit",variant:"primary","data-testid":m.wl.components.UserProfile.preferencesSaveButton,children:i||(i=(0,g.jsx)(o.cC,{id:"common.save"}))})})]})}})}}const j=x,v=(0,h.stylesFactory)(()=>({labelText:d.css`
      margin-right: 6px;
    `}))},"./public/app/features/admin/utils.ts":(e,s,t)=>{t.d(s,{d:()=>n});var a=t("./packages/grafana-runtime/src/index.ts");const n=()=>(function(){var e;const s=null===(e=a.config.licenseInfo)||void 0===e?void 0:e.trialExpiry;return!!(s&&s>0)})()&&a.config.featureToggles.featureHighlights},"./public/app/features/teams/TeamPages.tsx":(e,s,t)=>{t.r(s),t.d(s,{TeamPages:()=>Te,default:()=>we});var a=t("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),n=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=t("./packages/grafana-runtime/src/index.ts"),o=t("./packages/grafana-ui/src/index.ts"),c=t("./public/app/core/components/Page/Page.tsx"),d=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const m=["featureName","className","children","text","featureId","eventVariant","size"];const h=e=>{let{featureName:s,className:t,text:a,featureId:r,eventVariant:c="",size:h="md"}=e,p=function(e,s){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,m);const g=(0,o.useStyles2)(e=>u(e,h));return(0,n.useEffect)(()=>{(0,i.reportExperimentView)(`feature-highlights-${r}`,"test",c)},[c,r]),(0,l.jsxs)("div",Object.assign({className:(0,d.cx)(g.box,t)},p,{children:[(0,l.jsx)(o.Icon,{name:"rocket",className:g.icon}),(0,l.jsxs)("div",{className:g.inner,children:[(0,l.jsxs)("p",{className:g.text,children:["You’ve discovered a Pro feature! ",a||`Get the Grafana Pro plan to access ${s}.`]}),(0,l.jsx)(o.LinkButton,{variant:"secondary",size:h,className:g.button,href:"https://grafana.com/profile/org/subscription",target:"__blank",rel:"noopener noreferrer",children:"Upgrade"})]})]}))},u=(e,s)=>{const t=e.shape.borderRadius(2),a="md"===s?"body":"bodySmall";return{box:d.css`
      display: flex;
      align-items: center;
      position: relative;
      border-radius: ${t};
      background: ${e.colors.success.transparent};
      padding: ${e.spacing(2)};
      color: ${e.colors.success.text};
      font-size: ${e.typography[a].fontSize};
      text-align: left;
      line-height: 16px;
      margin: ${e.spacing(0,"auto",3,"auto")};
      max-width: ${e.breakpoints.values.xxl}px;
      width: 100%;
    `,inner:d.css`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    `,text:d.css`
      margin: 0;
    `,button:d.css`
      background-color: ${e.colors.success.main};
      font-weight: ${e.typography.fontWeightLight};
      color: white;

      &:hover {
        background-color: ${e.colors.success.main};
      }

      &:focus-visible {
        box-shadow: none;
        color: ${e.colors.text.primary};
        outline: 2px solid ${e.colors.primary.main};
      }
    `,icon:d.css`
      margin: ${e.spacing(.5,1,.5,.5)};
    `}},p=e=>{let{listItems:s,image:t,featureUrl:a,featureName:n,description:r,caption:i,action:c}=e;const d=(0,o.useStyles2)(g);return(0,l.jsxs)("div",{className:d.container,children:[(0,l.jsxs)("div",{className:d.content,children:[(0,l.jsxs)("h3",{className:d.title,children:["Get started with ",n]}),r&&(0,l.jsx)("h6",{className:d.description,children:r}),(0,l.jsx)("ul",{className:d.list,children:s.map((e,s)=>(0,l.jsxs)("li",{children:[(0,l.jsx)(o.Icon,{name:"check",size:"xl",className:d.icon})," ",e]},s))}),(null===c||void 0===c?void 0:c.link)&&(0,l.jsx)(o.LinkButton,{variant:"primary",href:c.link,children:c.text}),(null===c||void 0===c?void 0:c.onClick)&&(0,l.jsx)(o.Button,{variant:"primary",onClick:c.onClick,children:c.text}),a&&(0,l.jsx)(o.LinkButton,{fill:"text",href:a,className:d.link,target:"_blank",rel:"noreferrer noopener",children:"Learn more"})]}),(0,l.jsxs)("div",{className:d.media,children:[(0,l.jsx)("img",{src:b(t),alt:"Feature screenshot"}),i&&(0,l.jsx)("p",{className:d.caption,children:i})]})]})},g=e=>({container:d.css`
      display: flex;
      justify-content: space-between;
    `,content:d.css`
      width: 45%;
      margin-right: ${e.spacing(4)};
    `,media:d.css`
      width: 55%;

      img {
        width: 100%;
      }
    `,title:d.css`
      color: ${e.colors.text.maxContrast};
    `,description:d.css`
      color: ${e.colors.text.primary};
      font-weight: ${e.typography.fontWeightLight};
    `,list:d.css`
      list-style: none;
      margin: ${e.spacing(4,0,2,0)};

      li {
        display: flex;
        align-items: flex-start;
        color: ${e.colors.text.primary};
        padding: ${e.spacing(1,0)};
      }
    `,icon:d.css`
      color: ${e.colors.success.main};
      margin-right: ${e.spacing(1)};
    `,link:d.css`
      margin-left: ${e.spacing(2)};
    `,caption:d.css`
      font-weight: ${e.typography.fontWeightLight};
      margin: ${e.spacing(1,0,0)};
    `}),b=e=>e.startsWith("http")?e:"/public/img/enterprise/highlights/"+e;var f,x,j,v,y,T,w,I,k=t("./public/app/core/config.ts"),C=t("./public/app/core/selectors/navModel.ts"),A=t("./public/app/core/services/context_srv.ts"),S=t("./public/app/types/index.ts"),P=t("./public/app/core/components/Animations/SlideDown.tsx"),N=t("./public/app/core/components/CloseButton/CloseButton.tsx"),_=t("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx"),$=t("./public/app/features/admin/utils.ts"),L=t("./public/app/features/teams/state/actions.ts"),M=t("./public/app/features/teams/state/selectors.ts");function G(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const{Input:U}=o.LegacyForms;function B(e){return{groups:(0,M.JB)(e.team)}}const z={loadTeamGroups:L.j_,addTeamGroup:L.A_,removeTeamGroup:L.P5},V=((0,r.connect)(B,z),"Sync LDAP or OAuth groups with your Grafana teams.");const D=e=>{let{action:s}=e;const t=(0,o.useTheme2)();return(0,l.jsx)(p,{action:s,listItems:["Stop managing user access in two places - assign users to groups in SAML, LDAP or Oauth, and manage access at a Team level in Grafana","Update users’ permissions immediately when you add or remove them from an LDAP group, with no need for them to sign out and back in"],image:`team-sync-${t.isLight?"light":"dark"}.png`,featureName:"team sync",featureUrl:"https://grafana.com/docs/grafana/latest/enterprise/team-sync",description:"Team Sync makes it easier for you to manage users’ access in Grafana, by immediately updating each user’s Grafana teams and permissions based on their single sign-on group membership, instead of when users sign in."})},F=(0,r.connect)(B,z)(class extends n.PureComponent{constructor(e){super(e),G(this,"onToggleAdding",()=>{this.setState({isAdding:!this.state.isAdding})}),G(this,"onNewGroupIdChanged",e=>{this.setState({newGroupId:e.target.value})}),G(this,"onAddGroup",e=>{e.preventDefault(),this.props.addTeamGroup(this.state.newGroupId),this.setState({isAdding:!1,newGroupId:""})}),G(this,"onRemoveGroup",e=>{this.props.removeTeamGroup(e.groupId)}),this.state={isAdding:!1,newGroupId:""}}componentDidMount(){this.fetchTeamGroups()}async fetchTeamGroups(){await this.props.loadTeamGroups()}isNewGroupValid(){return this.state.newGroupId.length>1}renderGroup(e){const{isReadOnly:s}=this.props;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.groupId}),(0,l.jsx)("td",{style:{width:"1%"},children:(0,l.jsx)(o.Button,{size:"sm",variant:"destructive",onClick:()=>this.onRemoveGroup(e),disabled:s,children:f||(f=(0,l.jsx)(o.Icon,{name:"times"}))})})]},e.groupId)}render(){const{isAdding:e,newGroupId:s}=this.state,{groups:t,isReadOnly:a}=this.props;return(0,l.jsxs)("div",{children:[(0,$.d)()&&(x||(x=(0,l.jsx)(h,{featureId:"team-sync",eventVariant:"trial",featureName:"team sync",text:"Add a group to enable team sync for free during your trial of Grafana Pro."}))),(0,l.jsxs)("div",{className:"page-action-bar",children:[(!(0,$.d)()||t.length>0)&&(0,l.jsxs)(l.Fragment,{children:[j||(j=(0,l.jsx)("h3",{className:"page-sub-heading",children:"External group sync"})),v||(v=(0,l.jsx)(o.Tooltip,{placement:"auto",content:V,children:(0,l.jsx)(o.Icon,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"})}))]}),y||(y=(0,l.jsx)("div",{className:"page-action-bar__spacer"})),t.length>0&&(0,l.jsxs)(o.Button,{className:"pull-right",onClick:this.onToggleAdding,disabled:a,children:[T||(T=(0,l.jsx)(o.Icon,{name:"plus"}))," Add group"]})]}),(0,l.jsx)(P.s,{in:e,children:(0,l.jsxs)("div",{className:"cta-form",children:[(0,l.jsx)(N.P,{onClick:this.onToggleAdding}),w||(w=(0,l.jsx)("h5",{children:"Add External Group"})),(0,l.jsxs)("form",{className:"gf-form-inline",onSubmit:this.onAddGroup,children:[(0,l.jsx)("div",{className:"gf-form",children:(0,l.jsx)(U,{type:"text",className:"gf-form-input width-30",value:s,onChange:this.onNewGroupIdChanged,placeholder:"cn=ops,ou=groups,dc=grafana,dc=org",disabled:a})}),(0,l.jsx)("div",{className:"gf-form",children:(0,l.jsx)(o.Button,{type:"submit",disabled:a||!this.isNewGroupValid(),children:"Add group"})})]})]})}),0===t.length&&!e&&((0,$.d)()?(0,l.jsx)(D,{action:{onClick:this.onToggleAdding,text:"Add group"}}):(0,l.jsx)(_.Z,{onClick:this.onToggleAdding,buttonIcon:"users-alt",title:"There are no external groups to sync with",buttonTitle:"Add group",proTip:V,proTipLinkTitle:"Learn more",proTipLink:"https://docs.grafana.org/auth/enhanced_ldap/",proTipTarget:"_blank",buttonDisabled:a})),t.length>0&&(0,l.jsx)("div",{className:"admin-list-table",children:(0,l.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[I||(I=(0,l.jsx)("th",{children:"External Group ID"})),(0,l.jsx)("th",{style:{width:"1%"}})]})}),(0,l.jsx)("tbody",{children:t.map(e=>this.renderGroup(e))})]})})]})}});var E=t("./public/app/core/components/Select/UserPicker.tsx"),O=t("./public/app/core/components/TagFilter/TagBadge.tsx");const R=e=>{let{featureToggle:s,children:t}=e;return!0===s?(0,l.jsx)(l.Fragment,{children:t}):null};var W;const{Select:Z}=o.LegacyForms,Q={removeTeamMember:L.zT,updateTeamMember:L.zZ},H=(0,r.connect)(null,Q);const Y=H(class extends n.PureComponent{constructor(e){var s,t,a;super(e),a=((e,s)=>{const t=e.value,a=Object.assign({},s,{permission:t});this.props.updateTeamMember(a)}),(t="onPermissionChange")in(s=this)?Object.defineProperty(s,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[t]=a,this.renderLabels=this.renderLabels.bind(this),this.renderPermissions=this.renderPermissions.bind(this)}onRemoveMember(e){this.props.removeTeamMember(e.userId)}renderPermissions(e){const{editorsCanAdmin:s,signedInUserIsTeamAdmin:t}=this.props,a=S.eL.find(s=>s.value===e.permission);return(0,l.jsx)(R,{featureToggle:s,children:(0,l.jsx)("td",{className:"width-5 team-permissions",children:(0,l.jsxs)("div",{className:"gf-form",children:[t&&(0,l.jsx)(Z,{isSearchable:!1,options:S.eL,onChange:s=>this.onPermissionChange(s,e),className:"gf-form-select-box__control--menu-right",value:a}),!t&&(0,l.jsx)("span",{children:a.label})]})})})}renderLabels(e){return e?(0,l.jsx)("td",{children:e.map(e=>(0,l.jsx)(O.e,{label:e,removeIcon:!1,count:0,onClick:()=>{}},e))}):W||(W=(0,l.jsx)("td",{}))}render(){const{member:e,syncEnabled:s,signedInUserIsTeamAdmin:t}=this.props;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"width-4 text-center",children:(0,l.jsx)("img",{"aria-label":`Avatar for team member "${e.name}"`,className:"filter-table__avatar",src:e.avatarUrl})}),(0,l.jsx)("td",{children:e.login}),(0,l.jsx)("td",{children:e.email}),(0,l.jsx)("td",{children:e.name}),this.renderPermissions(e),s&&this.renderLabels(e.labels),(0,l.jsx)("td",{className:"text-right",children:(0,l.jsx)(o.DeleteButton,{"aria-label":"Remove team member",size:"sm",disabled:!t,onConfirm:()=>this.onRemoveMember(e)})})]},e.userId)}});var q,J,X,K,ee,se,te,ae,ne=t("./public/app/features/teams/state/reducers.ts");function re(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const ie={addTeamMember:L.Lt,setSearchMemberQuery:ne.UD},oe=(0,r.connect)(function(e){return{searchMemberQuery:(0,M.xc)(e.team),editorsCanAdmin:k.vc.editorsCanAdmin,signedInUser:A.Vt.user}},ie);const ce=oe(class extends n.PureComponent{constructor(e){super(e),re(this,"onSearchQueryChange",e=>{this.props.setSearchMemberQuery(e)}),re(this,"onToggleAdding",()=>{this.setState({isAdding:!this.state.isAdding})}),re(this,"onUserSelected",e=>{this.setState({newTeamMember:e})}),re(this,"onAddUserToTeam",async()=>{this.props.addTeamMember(this.state.newTeamMember.id),this.setState({newTeamMember:null})}),this.state={isAdding:!1,newTeamMember:null}}renderLabels(e){return e?(0,l.jsx)("td",{children:e.map(e=>(0,l.jsx)(O.e,{label:e,removeIcon:!1,count:0,onClick:()=>{}},e))}):q||(q=(0,l.jsx)("td",{}))}render(){const{isAdding:e}=this.state,{searchMemberQuery:s,members:t,syncEnabled:a,editorsCanAdmin:n,signedInUser:r}=this.props,i=(0,M.vt)({members:t,editorsCanAdmin:n,signedInUser:r});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"page-action-bar",children:[(0,l.jsx)("div",{className:"gf-form gf-form--grow",children:(0,l.jsx)(o.FilterInput,{placeholder:"Search members",value:s,onChange:this.onSearchQueryChange})}),(0,l.jsx)(o.Button,{className:"pull-right",onClick:this.onToggleAdding,disabled:e||!i,children:"Add member"})]}),(0,l.jsx)(P.s,{in:e,children:(0,l.jsxs)("div",{className:"cta-form",children:[(0,l.jsx)(N.P,{"aria-label":"Close 'Add team member' dialogue",onClick:this.onToggleAdding}),J||(J=(0,l.jsx)(o.Label,{htmlFor:"user-picker",children:"Add team member"})),(0,l.jsxs)("div",{className:"gf-form-inline",children:[(0,l.jsx)(E.f,{inputId:"user-picker",onSelected:this.onUserSelected,className:"min-width-30"}),this.state.newTeamMember&&(0,l.jsx)(o.Button,{type:"submit",onClick:this.onAddUserToTeam,children:"Add to team"})]})]})}),(0,l.jsx)("div",{className:"admin-list-table",children:(0,l.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[X||(X=(0,l.jsx)("th",{})),K||(K=(0,l.jsx)("th",{children:"Login"})),ee||(ee=(0,l.jsx)("th",{children:"Email"})),se||(se=(0,l.jsx)("th",{children:"Name"})),(0,l.jsx)(R,{featureToggle:n,children:te||(te=(0,l.jsx)("th",{children:"Permission"}))}),a&&(ae||(ae=(0,l.jsx)("th",{}))),(0,l.jsx)("th",{style:{width:"1%"}})]})}),(0,l.jsx)("tbody",{children:t&&t.map(e=>(0,l.jsx)(Y,{member:e,syncEnabled:a,editorsCanAdmin:n,signedInUserIsTeamAdmin:i},e.userId))})]})})]})}});var de=t("./public/app/core/components/AccessControl/index.ts");const le=e=>{const s=A.Vt.hasPermissionInMetadata(S.bW.ActionTeamsPermissionsWrite,e.team);return(0,l.jsx)(de.P,{title:"Members",addPermissionTitle:"Add member",buttonLabel:"Add member",resource:"teams",resourceId:e.team.id,canSetPermissions:s})};var me=t("./public/app/core/components/SharedPreferences/SharedPreferences.tsx"),he=t("./public/app/core/core.ts");const ue={updateTeam:L.fs},pe=(0,r.connect)(null,ue)(e=>{let{team:s,updateTeam:t}=e;const a=he.Vt.hasPermissionInMetadata(S.bW.ActionTeamsWrite,s);return(0,l.jsxs)(o.VerticalGroup,{children:[(0,l.jsx)(o.FieldSet,{label:"Team settings",children:(0,l.jsx)(o.Form,{defaultValues:Object.assign({},s),onSubmit:e=>{t(e.name,e.email)},disabled:!a,children:e=>{let{register:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Field,{label:"Name",disabled:!a,children:(0,l.jsx)(o.Input,Object.assign({},s("name",{required:!0}),{id:"name-input"}))}),(0,l.jsx)(o.Field,{label:"Email",description:"This is optional and is primarily used to set the team profile avatar (via gravatar service).",disabled:!a,children:(0,l.jsx)(o.Input,Object.assign({},s("email"),{placeholder:"team@email.com",type:"email",id:"email-input"}))}),(0,l.jsx)(o.Button,{type:"submit",disabled:!a,children:"Update"})]})}})}),(0,l.jsx)(me.v,{resourceUri:`teams/${s.id}`,disabled:!a})]})});var ge,be,fe,xe=t("./public/app/features/teams/state/navModel.ts");function je(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}!function(e){e.Members="members",e.Settings="settings",e.GroupSync="groupsync"}(fe||(fe={}));const ve={loadTeam:L.QX,loadTeamMembers:L.ei},ye=(0,r.connect)(function(e,s){var t;const a=parseInt(s.match.params.id,10),n=(0,M.VP)(e.team,a);let r="members";A.Vt.accessControlEnabled()&&(n&&A.Vt.hasPermissionInMetadata(S.bW.ActionTeamsPermissionsRead,n)||(r="settings"));const i=null!==(t=s.match.params.page)&&void 0!==t?t:r,o=(0,xe.o)(i);return{navModel:(0,C.h)(e.navIndex,`team-${i}-${a}`,o),teamId:a,pageName:i,team:n,members:(0,M.YY)(e.team),editorsCanAdmin:k.ZP.editorsCanAdmin,signedInUser:A.Vt.user}},ve);class Te extends n.PureComponent{constructor(e){super(e),je(this,"textsAreEqual",(e,s)=>!e&&!s||!(!e||!s)&&e.toLocaleLowerCase()===s.toLocaleLowerCase()),je(this,"hideTabsFromNonTeamAdmin",(e,s)=>A.Vt.accessControlEnabled()?e:(!s&&e.main&&e.main.children&&e.main.children.filter(e=>!this.textsAreEqual(e.text,fe.Members)).map(e=>{e.hideFromTabs=!0}),e)),this.state={isLoading:!1,isSyncEnabled:(0,i.featureEnabled)("teamsync")}}async componentDidMount(){await this.fetchTeam()}async fetchTeam(){const{loadTeam:e,teamId:s}=this.props;this.setState({isLoading:!0});const t=await e(s);return A.Vt.accessControlEnabled()||await this.props.loadTeamMembers(),this.setState({isLoading:!1}),t}getCurrentPage(){const e=["members","settings","groupsync"],s=this.props.pageName;return(0,a.includes)(e,s)?s:e[0]}renderPage(e){const{isSyncEnabled:s}=this.state,{members:t,team:a}=this.props,n=this.getCurrentPage(),r=A.Vt.hasAccessInMetadata(S.bW.ActionTeamsRead,a,e),i=A.Vt.hasAccessInMetadata(S.bW.ActionTeamsPermissionsRead,a,e),o=A.Vt.hasAccessInMetadata(S.bW.ActionTeamsPermissionsWrite,a,e);switch(n){case fe.Members:return A.Vt.accessControlEnabled()?(0,l.jsx)(le,{team:a}):(0,l.jsx)(ce,{syncEnabled:s,members:t});case fe.Settings:return r&&(0,l.jsx)(pe,{team:a});case fe.GroupSync:if(s){if(i)return(0,l.jsx)(F,{isReadOnly:!o})}else if(k.ZP.featureToggles.featureHighlights)return(0,l.jsxs)(l.Fragment,{children:[ge||(ge=(0,l.jsx)(h,{featureName:"team sync",featureId:"team-sync"})),be||(be=(0,l.jsx)(D,{}))]})}return null}render(){const{team:e,navModel:s,members:t,editorsCanAdmin:a,signedInUser:n}=this.props,r=(0,M.vt)({members:t,editorsCanAdmin:a,signedInUser:n});return(0,l.jsx)(c.Z,{navModel:this.hideTabsFromNonTeamAdmin(s,r),children:(0,l.jsx)(c.Z.Contents,{isLoading:this.state.isLoading,children:e&&0!==Object.keys(e).length&&this.renderPage(r)})})}}const we=ye((0,o.withTheme2)(Te))},"./public/app/features/teams/state/actions.ts":(e,s,t)=>{t.d(s,{A_:()=>(function(e){return async(s,t)=>{const n=t().team.team;await(0,a.getBackendSrv)().post(`/api/teams/${n.id}/groups`,{groupId:e}),s(u())}}),Lt:()=>(function(e){return async(s,t)=>{const n=t().team.team;await(0,a.getBackendSrv)().post(`/api/teams/${n.id}/members`,{userId:e}),s(h())}}),P5:()=>(function(e){return async(s,t)=>{const n=t().team.team;await(0,a.getBackendSrv)().delete(`/api/teams/${n.id}/groups/${encodeURIComponent(e)}`),s(u())}}),QX:()=>m,ei:()=>h,fC:()=>(function(e){return async s=>{await(0,a.getBackendSrv)().delete(`/api/teams/${e}`),await r.Vt.fetchUserPermissions(),s(l())}}),fs:()=>(function(e,s){return async(t,n)=>{const r=n().team.team;await(0,a.getBackendSrv)().put(`/api/teams/${r.id}`,{name:e,email:s}),t(m(r.id))}}),jI:()=>l,j_:()=>u,zT:()=>(function(e){return async(s,t)=>{const n=t().team.team;await(0,a.getBackendSrv)().delete(`/api/teams/${n.id}/members/${e}`),s(h())}}),zZ:()=>(function(e){return async s=>{await(0,a.getBackendSrv)().put(`/api/teams/${e.teamId}/members/${e.userId}`,{permission:e.permission}),s(h())}})});var a=t("./packages/grafana-runtime/src/index.ts"),n=t("./public/app/core/actions/index.ts"),r=t("./public/app/core/core.ts"),i=t("./public/app/core/utils/accessControl.ts"),o=t("./public/app/types/index.ts"),c=t("./public/app/features/teams/state/navModel.ts"),d=t("./public/app/features/teams/state/reducers.ts");function l(){return async e=>{if(!r.Vt.hasPermission(o.bW.ActionTeamsRead))return void e((0,d.PL)([]));const s=await(0,a.getBackendSrv)().get("/api/teams/search",(0,i.y)({perpage:1e3,page:1}));e((0,d.PL)(s.teams))}}function m(e){return async s=>{const t=await(0,a.getBackendSrv)().get(`/api/teams/${e}`,(0,i.y)());s((0,d.y$)(t)),s((0,n.RL)((0,c.B)(t)))}}function h(){return async(e,s)=>{const t=s().team.team,n=await(0,a.getBackendSrv)().get(`/api/teams/${t.id}/members`);e((0,d.n2)(n))}}function u(){return async(e,s)=>{const t=s().team.team,n=await(0,a.getBackendSrv)().get(`/api/teams/${t.id}/groups`);e((0,d.iI)(n))}}},"./public/app/features/teams/state/navModel.ts":(e,s,t)=>{t.d(s,{B:()=>l,o:()=>(function(e){const s=l(d);let t;for(const a of s.children)if(a.id.indexOf(e)>0){a.active=!0,t=a;break}return{main:s,node:t}})});var a=t("./packages/grafana-runtime/src/index.ts"),n=t("./public/app/core/components/Upgrade/ProBadge.tsx"),r=t("./public/app/core/config.ts"),i=t("./public/app/core/services/context_srv.ts"),o=t("./public/app/features/admin/utils.ts"),c=t("./public/app/types/index.ts");const d={avatarUrl:"public/img/user_profile.png",id:1,name:"Loading",email:"loading",memberCount:0,permission:c.hw.Member};function l(e){const s={img:e.avatarUrl,id:"team-"+e.id,subTitle:"Manage members and settings",url:"",text:e.name,breadcrumbs:[{title:"Teams",url:"org/teams"}],children:[{active:!1,icon:"sliders-v-alt",id:`team-settings-${e.id}`,text:"Settings",url:`org/teams/edit/${e.id}/settings`}]};(e===d||i.Vt.hasPermissionInMetadata(c.bW.ActionTeamsPermissionsRead,e))&&s.children.unshift({active:!1,icon:"users-alt",id:`team-members-${e.id}`,text:"Members",url:`org/teams/edit/${e.id}/members`});const t={active:!1,icon:"sync",id:`team-groupsync-${e.id}`,text:"External group sync",url:`org/teams/edit/${e.id}/groupsync`},l=e===d;return(0,o.d)()&&(t.tabSuffix=(()=>(0,n.Z)({experimentId:l?"":"feature-highlights-team-sync-badge",eventVariant:"trial"}))),(0,a.featureEnabled)("teamsync")?(l||i.Vt.hasPermissionInMetadata(c.bW.ActionTeamsPermissionsRead,e))&&s.children.push(t):r.ZP.featureToggles.featureHighlights&&s.children.push(Object.assign({},t,{tabSuffix:()=>(0,n.Z)({experimentId:l?"":"feature-highlights-team-sync-badge"})})),s}},"./public/app/features/teams/state/selectors.ts":(e,s,t)=>{t.d(s,{JB:()=>i,LK:()=>l,VP:()=>d,YY:()=>m,_u:()=>c,kC:()=>u,uP:()=>n,v7:()=>o,vt:()=>h,xc:()=>r});var a=t("./public/app/types/index.ts");const n=e=>e.searchQuery,r=e=>e.searchMemberQuery,i=e=>e.groups,o=e=>e.teams.length,c=e=>e.searchPage,d=(e,s)=>e.team.id===parseInt(s,10)?e.team:null,l=e=>{const s=RegExp(e.searchQuery,"i");return e.teams.filter(e=>s.test(e.name))},m=e=>{const s=RegExp(e.searchMemberQuery,"i");return e.members.filter(e=>s.test(e.login)||s.test(e.email)||s.test(e.name))},h=e=>{const{members:s,signedInUser:t,editorsCanAdmin:n}=e,r=s.find(e=>e.userId===t.id),i=r?r.permission:a.hw.Member;return u({permission:i,signedInUser:t,editorsCanAdmin:n})},u=e=>{const{permission:s,signedInUser:t,editorsCanAdmin:n}=e,r=t.isGrafanaAdmin||t.orgRole===a.B5.Admin,i=s===a.hw.Admin;return r||i||!n}}}]);