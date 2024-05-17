export interface UserData {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string;
    role: string;
    join_date: string;
    description: string;
}

interface ApiResponse {
    data: {
        users: UserData[];
    };
}

export async function fetchGetUsers(): Promise<UserData[]> {
    const url = 'https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users';
    function setError(error: number | string | any): Error {
        if(Number(error)) {
            throw new Error(`HTTP error! Status: ${error}`);
        }
        throw new Error(error);
    }

    try {
        const response: Response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            setError(response.status);
        }

        const responseData: ApiResponse = await response.json();

        if (!responseData || !responseData.data || !responseData.data.users) {
            setError('Invalid response format');
        }

        return responseData.data.users as UserData[];

    } catch (error: any) {
       setError(error);
       return [];
    }
}