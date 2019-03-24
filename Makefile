start:
	json-server --watch mockdata.json &
	react-native run-ios

make server:
	json-server --watch mockdata.json &
