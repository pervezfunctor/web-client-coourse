#include <iostream>

struct Closure
{
  int by;

  int operator()(int x)
  {
    return this->by + x;
  }
};

Closure addBy(int by)
{
  return Closure{by};
}

int main()
{
  using namespace std;

  auto f = addBy(100);

  cout << f(100) << endl;
}
