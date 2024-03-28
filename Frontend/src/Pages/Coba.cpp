#include <iostream>
#include <vector>

using namespace std;

class Data
{
    private:
    template <typename T, size_t N>
    static constexpr size_t GetArrayLength(const T (&)[N])
    {
        return N;
    }

    public:
    template <typename Return, typename DataType, typename Requirement> 
    static std::vector<Return> Filter(const DataType &data, Requirement filter)
    {
        std::vector<Return> res; 

        for(auto item : data)
        {
            if(filter(item))
            {
                res.push_back(item);
            }
        }

        return res;
    }
};


int main()
{
    int num [] = {1, 2, 3, 4, 5, 6, 7};

    auto result = Data::Filter<int>(num, [](int num) ->
        {return num < 5;}
    );

    for(auto i : result)
    {
        cout << i;
    }

    return 0;
}