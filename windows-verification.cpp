#include <iostream>

using namespace std;

int main(){
	
	std::cout << "======VERIFICATION WITH NETSTAT======" << endl;
	system("netstat -an");
	system("pause");
	return 0;
}
