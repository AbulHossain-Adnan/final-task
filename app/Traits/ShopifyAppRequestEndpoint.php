<?php
namespace App\Traits;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Http\Client\Response;
use RuntimeException;

trait ShopifyAppRequestEndpoint
{
    private object $response;
    private string $apiMethod = 'get';
    private array|string $body;
    protected string $apiEndpoint;
    public string $uuid;

    public function __construct()
    {
        $this->uuid = Str::uuid()->toString();
        $this->apiEndpoint = 'https://jvljwem0r4.sharedwithexpose.com';
        $this->body = [];
        $this->response = Http::retry(2, 1500)->withHeaders([
            'uuid' => $this->uuid,
        ])->acceptJson();
    }

    public function processProperty(string $request_url, ?string $method = null, ?int $user_id = null): void
    {
        if (!is_null($method)) {
            $this->apiMethod = $method;
        }
        if (!is_null($user_id)) {
            $this->user_id = $user_id;
        }
        $this->body = ['user_id' => $user_id];
        $this->apiEndpoint = $this->apiEndpoint . $request_url;
    }

    private function sendRequest(): Response
    {
        if (in_array($this->apiMethod, ['get', 'post', 'put', 'delete'])) {
            if (!empty($this->body)) {
                $method = $this->apiMethod;
                DB::table('request_checkers')->insert([
                    'uuid' => $this->uuid,
                    'user_id' => $this->body['user_id'],
                ]);

                return $this->response->$method($this->apiEndpoint, $this->body);
            }
        }
        throw new RuntimeException('Unknown request method type');
    }
}

?>
