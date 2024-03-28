#include <cstdarg>
#include <iostream>

using namespace std;
 
int add_nums(int count...)
{
    int result = 0;
    std::va_list args;
    va_start(args, count);
    for (int i = 0; i < count; ++i)
        cout << va_arg(args, int) << endl;
    va_end(args);
    return result;
}
 

void Declare(int val)
{
    static int a;
    a += val;
    cout << a << endl;
}

union Coba
{
    long a;
    float b;
};

class Kelas
{
    public:
    int a;

    public:
    Kelas()
    {

    }

    Kelas(int val)
    {
        a = val;
    }
};

namespace File
{
    void ReadFile()
    {
        printf("reading file\n");
    }
};

int main()
{
    File::ReadFile();
}