capID=aa.cap.getCapID("GAR2012-03219").getOutput();
	capDetail = aa.cap.getCapDetail(capID).getOutput();
aa.print("capDetail is a " + capDetail.getClass());
	for (x in capDetail) {
		if (typeof(capDetail[x]) == "function") {
			aa.print( " " + x);
		}
	}