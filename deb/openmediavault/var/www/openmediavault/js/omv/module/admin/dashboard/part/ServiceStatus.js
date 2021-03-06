/**
 * This file is part of OpenMediaVault.
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Volker Theile <volker.theile@openmediavault.org>
 * @copyright Copyright (c) 2009-2017 Volker Theile
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
 */
// require("js/omv/workspace/dashboard/Part.js")

/**
 * @class OMV.module.admin.dashboard.part.ServiceStatus
 * @derived OMV.workspace.dashboard.Part
 */
Ext.define("OMV.module.admin.dashboard.part.ServiceStatus", {
	extend: "OMV.workspace.dashboard.Part",
	alias: "part.module.admin.dashboard.part.servicestatus",

	config: {
		title: _("Services"),
		iconCls: "x-fa fa-wrench",
		viewXType: "module.admin.dashboard.view.servicestatus",
		showAtFirstStartup: true
	}
});
