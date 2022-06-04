---
title: 'About RBAC in Grafana'
menuTitle: 'About RBAC'
description: 'Role-based access control (RBAC) provides a standardized way of granting, changing, and revoking access so that users can view and modify Grafana resources, such as users and reports.'
aliases: ["/docs/grafana/latest/enterprise/access-control/', '/docs/grafana/latest/enterprise/access-control/roles/"]
weight: 10
---

# About RBAC

Role-based access control (RBAC) provides a standardized way of granting, changing, and revoking access so that users can view and modify Grafana resources, such as users and reports.
RBAC extends Grafana basic roles that are included in Grafana OSS, and enables you more granular control of users’ actions.

> **Note:** RBAC is in beta, so you can expect changes in future releases.

By using RBAC you can provide users with permissions that extend the permissions available with basic roles. For example, you can use RBAC to:

- Modify existing basic roles: for example, enable an editor to create reports
- Assign fixed roles to users and teams: for example, grant an engineering team the ability to create data sources
- Create custom roles: for example, a role that allows users to create and edit dashboards, but not delete them

Basic roles contain multiple fixed roles. Fixed roles in turn contain multiple permissions, each of which has an action and a scope. Here is an example of the hierarchy of Basic roles, fixed roles, permissions, actions, and scopes.

- **Basic role:** `Viewer`
  - **Fixed role:** `fixed:datasources:reader`
    - **Permission:**
      - **Action:** `datasources:read`
      - **Scope:** `datasources:*`

## Basic roles

Basic roles are the standard roles that are available in Grafana OSS. If you have purchased a Grafana Enterprise license, you can still use basic roles.

Grafana includes the following basic roles:

- Grafana administrator
- Organization administrator
- Editor
- Viewer

Each basic role is comprised of a number of _fixed roles_ that control the permissions a basic role grants. For example, the viewer basic role contains the following fixed roles among others:

- `fixed:datasources:id:reader`: Enables the viewer to see the ID of a data source.
- `fixed:organization:reader`: Enables the viewer to see a list of organizations.
- `fixed:annotations:reader`: Enables the viewer to see annotations that other users have added to a dashboard.
- `fixed:annotations.dashboard:writer`: Enables the viewer to add annotations to a dashboard.

You can use RBAC to modify the fixed roles associated with any basic role, to modify what viewers, editors, or admins can do. For more information about the fixed roles associated with each basic role, refer to [Basic role definitions]({{< relref "./rbac-fixed-basic-role-definitions#basic-role-assignments" >}}).

> **Note:** You must assign each Grafana user a basic role.

## Fixed roles

Grafana Enterprise includes the ability for you to assign discrete fixed roles to users and teams. This gives you finer-grained control over user permissions than you would have with basic roles alone. These roles are called "fixed" because you cannot change or delete fixed roles. You can also create _custom_ roles of your own; see more information in the [custom roles section]({{< relref "#custom-roles" >}}) below.

Assign fixed roles when the basic roles do not meet your permission requirements. For example, you might want a user with the basic viewer role to also edit dashboards. Or, you might want anyone with the editor role to also add and manage users. Fixed roles provide users more granular access to create, view, and update the following Grafana resources:

- [Alerting]({{< relref "../../alerting/_index.md">}})
- [Annotations]({{< relref "../../dashboards/annotations.md" >}})
- [API keys]({{< relref "../../administration/api-keys/_index.md" >}})
- [Dashboards and folders]({{< relref "../../dashboards/_index.md" >}})
- [Data sources]({{< relref "../../datasources/_index.md" >}})
- [Explore]({{< relref "../../explore/_index.md" >}})
- [Folders]({{< relref "../../dashboards/dashboard-folders.md" >}})
- [LDAP]({{< relref "../../auth/ldap/_index.md" >}})
- [Licenses]({{< relref "../license/_index.md" >}})
- [Organizations]({{< relref "../../administration/manage-organizations/_index.md" >}})
- [Provisioning]({{< relref "../../administration/provisioning/_index.md" >}})
- [Reports]({{< relref "../reporting.md" >}})
- [Roles]({{< relref "../../administration/manage-users-and-permissions/_index.md" >}})
- [Settings]({{< relref "../settings-updates.md" >}})
- [Service accounts]({{< relref "../../administration/service-accounts/_index.md" >}})
- [Teams]({{< relref "../../administration/manage-users-and-permissions/manage-teams/_index.md" >}})
- [Users]({{< relref "../../administration/manage-users-and-permissions/manage-server-users/_index.md" >}})

To learn more about the permissions you can grant for each resource, refer to [RBAC role definitions]({{< relref "./rbac-fixed-basic-role-definitions.md" >}}).

## Custom roles

If you are a Grafana Enterprise customer, you can create custom roles to manage user permissions in a way that meets your security requirements.

Custom roles contain unique combinations of permissions _actions_ and _scopes_. An action defines the action a use can perform on a Grafana resource. For example, the `teams.roles:list` action allows a user to see a list of roles associated with each team.

A scope describes where an action can be performed. For example, the `teams:1` scope restricts the user's action to the team with ID `1`. When paired with the `teams.roles:list` action, this permission prohibits the user from viewing the roles for teams other than team `1`.

Consider creating a custom role when fixed roles do not meet your permissions requirements.

### Custom role creation

You can use either of the following methods to create, assign, and manage custom roles:

- Grafana provisioning: You can use a YAML file to configure roles. For more information about using provisioning to create custom roles, refer to [Manage RBAC roles]({{< relref "./manage-rbac-roles.md" >}}). For more information about using provisioning to assign RBAC roles to users or teams, refer to [Assign RBAC roles]({{< relref "./assign-rbac-roles.md" >}}).
- RBAC API: As an alternative, you can use the Grafana HTTP API to create and manage roles. For more information about the HTTP API, refer to [RBAC API]({{< relref "../../http_api/access_control.md" >}}).

## Limitation

If you have created a folder with the name `General` or `general`, you cannot manage its permissions with RBAC.

If you set [folder permissions]({{< relref "../../administration/manage-users-and-permissions/manage-dashboard-permissions/_index.md" >}}) for a folder named `General` or `general`, the system disregards the folder when RBAC is enabled.
