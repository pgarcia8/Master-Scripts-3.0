//=================ACA_Pageflow_LP_Before:Sign
if (!checkCapForLicensedProfessionalType("Sign") && !checkCapForLicensedProfessionalType("Illuminated Signs") ) {
	stopThePage = true;
	cancel = true;
	showMessage = true;
	comment("\nThe License you used when creating this application is not an Electrical license according to our records.\n\nIf you have more than one license associated to your login, Obtain a New Sub-Permit and select the correct license.\n\nContact the Building Permit and Inspections Department for assistance if needed at (956) 681-1300.");
}
