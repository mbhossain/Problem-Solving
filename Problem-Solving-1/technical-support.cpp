//Source: https://codeforces.com/contest/1754/problem/A
//#include<bits/stdc++.h>
#include<iostream>
using namespace std;
int main()
{

    int t,n,qa;
    char c;
    cin>>t;
    while(t--)
    {
        cin>>n;
        qa=0;
        while(n--)
        {
            cin>>c;
            if(c=='Q')qa++;
            else if(qa>0)qa--;
        }
        cout<<(qa?"No\n":"Yes\n");
    }
}
